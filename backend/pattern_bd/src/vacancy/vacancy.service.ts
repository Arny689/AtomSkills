import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacancy } from 'src/entities/vacancy.entity';
import { Repository } from 'typeorm';
import { CreateAndUpdateVacancy } from './dto/crateAndUpdateVacancy.dto';

@Injectable()
export class VacancyService {

    constructor(
        @InjectRepository(Vacancy)
        private readonly vacancyRepository: Repository<Vacancy>,
    ) {}

    async getAllVacancies(): Promise<Vacancy[]> {
        return this.vacancyRepository.find()
    }

    async getOneVacancyById(id: number): Promise<Vacancy | null> {
        return this.vacancyRepository.findOneBy({
            id
        })
    }

    async removeVacancy(id: number): Promise<void> {
        this.vacancyRepository.delete({
            id
        })
    }

    async createVacancy(vacancy: CreateAndUpdateVacancy): Promise<Vacancy> {
        return this.vacancyRepository.save({ ...vacancy })
    }

    async updateVacancy(vacancy: CreateAndUpdateVacancy, vacancyId: number): Promise<Vacancy> {
        await this.vacancyRepository.update({id: vacancyId}, {...vacancy})
        return this.getOneVacancyById(vacancyId)
    }
}


