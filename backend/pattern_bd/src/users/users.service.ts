import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUser, CreateUserResponse } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) {}

    async getUser(email: string): Promise<Users | null> {
        return this.usersRepository.findOneBy({
            email
        })
    }

    async addUser(user: CreateUser): Promise<CreateUserResponse> {

        const existingUser = await this.getUser(user.email)

        if (existingUser) {
            throw new HttpException("User exists", HttpStatus.CONFLICT)
        }
        
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(user.password, salt)
        
        const payload = {
            email: user.email,
            password: hash,
            roles: user.roles
        }
        
        const newUser = await this.usersRepository.save(payload)
        return { email: newUser.email }
    }

    async getAllUsers(): Promise<Users[]> {
        return this.usersRepository.find()
    }
}
