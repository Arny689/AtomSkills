import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Interview')
export class Interview {

    @PrimaryGeneratedColumn()
    id: number 
    
    @Column({type: 'date'})
    date: string

    @Column({type: 'time', name: 'elapsed_time'})
    time: Date

    @Column()
    place: string

    @Column()
    candidate: string

    @Column()
    expert: string

    @Column()
    hrDepartmentEmployee: string

    @Column({type: 'text'})
    candidateInfo: string

    @Column({type: 'text'})
    vacancyInfo: string

    @Column({type: 'text'})
    requirenmentsForVacancy: string

}
