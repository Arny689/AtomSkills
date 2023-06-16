import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoryPost')
export class CategoryPost {

    @PrimaryGeneratedColumn()
    id: number 
    
    @Column()
    category: string

}
