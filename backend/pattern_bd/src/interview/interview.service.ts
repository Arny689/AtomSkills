import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interview } from 'src/entities/interview.entity';
import { Repository } from 'typeorm';
import { CreateAndUpdateInterview } from './dto/createAndupdateInterview.dto';

@Injectable()
export class InterviewService {

    constructor(
        @InjectRepository(Interview)
        private readonly interviewRepository: Repository<Interview>
    ) {}

    async getAllInterviews(): Promise<Interview[]> {
        return this.interviewRepository.find()
    }

    async getOneInterviewById(id: number): Promise<Interview | null> {
        return this.interviewRepository.findOneBy({
            id
        })
    }

    async removeInterview(id: number): Promise<void> {
        this.interviewRepository.delete({
            id
        })
    }

    async createInterview(interview: CreateAndUpdateInterview): Promise<Interview> {
        return this.interviewRepository.save({ ...interview })
    }

    async updateInterview(interview: CreateAndUpdateInterview, interviewId: number): Promise<Interview> {
        await this.interviewRepository.update({id: interviewId}, {...interview})
        return this.getOneInterviewById(interviewId)
    }
}



