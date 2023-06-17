import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from 'src/entities/vacancy.entity';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vacancy])],
  providers: [VacancyService],
  controllers: [VacancyController]
})
export class VacancyModule {}
