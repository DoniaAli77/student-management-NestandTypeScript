import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { course } from 'src/courses/models/course.schema';
import { updateCourseDTo } from './dto/updateStudent.dto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(course.name) private courseModel: mongoose.Model<course>
    ) { }

    // create a course
    async create(courseData: course): Promise<course> {
        const newStudent = new this.courseModel(courseData);  // Create a new student document
        return await newStudent.save();  // Save it to the database
    }

    // Get all courses
    async findAll(): Promise<course[]> {
        let students= await this.courseModel.find();  // Fetch all students from the database
        return students
    }

    // Get a course by ID
    async findById(id: string): Promise<course> {
        return await this.courseModel.findById(id);  // Fetch a student by ID
    }

    // Update a course's details by ID
    async update(id: string, updateData: updateCourseDTo): Promise<CSSCounterStyleRule> {
        return await this.courseModel.findByIdAndUpdate(id, updateData, { new: true });  // Find and update the student
    }

    // Delete a course by ID
    async delete(id: string): Promise<course> {
        return await this.courseModel.findByIdAndDelete(id);  // Find and delete the student
    }



}




