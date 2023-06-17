import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Vacancy')
export class Vacancy {

    @PrimaryGeneratedColumn()
    id: number 
    
    @Column()
    vacancyName: string

    @Column()
    position: string

    @Column({type: 'text'})
    requrimentsForCandidate: string

    @Column({type: 'text'})
    responsibilities: string

    @Column({type: 'text'})
    jonConditions: string
    
    @Column({type: 'simple-array'})
    hrStaff: string[]

    @Column({type: 'text'})
    criteriaForEvaluatingCandidates: string

    @Column({type: 'timestamptz'})
    timeOfInterviews: Date
}
