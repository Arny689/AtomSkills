import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoryPost } from "./categoryPost.entity";

@Entity('post')
export class Posts {

    @PrimaryGeneratedColumn()
    id: number 
    
    @Column()
    name: string

    @OneToOne(() => CategoryPost)
    @JoinColumn()
    categoryPost: CategoryPost
}
