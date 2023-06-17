import { Controller, Delete, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Public } from 'src/decorator/access.decorator';
import { VacancyService } from './vacancy.service';
import { Vacancy } from 'src/entities/vacancy.entity';
import { CreateAndUpdateVacancy } from './dto/crateAndUpdateVacancy.dto';

@Controller('vacancy')
export class VacancyController {


    constructor(
        private vacancyService: VacancyService) {}
    
    @Public()
    @Get('allVacancies')
    async getAllVacancies(): Promise<Vacancy[]> {
        return await this.vacancyService.getAllVacancies()
    }

    @Get(':id')
    async getOnevacancyById(@Param('id') id: string): Promise<Vacancy> {
        return await this.vacancyService.getOneVacancyById(+id)
    }

    @Delete(':id')
    async removeVacancy(@Param('id') id: string) {
        return await this.vacancyService.removeVacancy(+id)
    }

    @Public()
    @Post()
    async createVacancy(@Body() createVacancy: CreateAndUpdateVacancy) {
       return await this.vacancyService.createVacancy(createVacancy)
    }

    @Public()
    @Put(':id')
    async updateVacancy(@Param('id') id: string, @Body() updateVacancy: CreateAndUpdateVacancy) {
        return await this.vacancyService.updateVacancy(updateVacancy, +id)
    }
}
