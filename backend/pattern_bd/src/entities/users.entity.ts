import { Role } from "src/users/roles";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn()
    id: number 

    @Column("simple-array", { default: Role.User })
    roles: Role[]
    
    @Column()
    email: string

    @Column()
    password: string

}
