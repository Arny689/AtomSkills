import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto';
import { Roles } from '../decorator/roles.decorator';
import { Role } from './roles';
import { RolesGuard } from 'src/auth/roles.guard';
import { Users } from 'src/entities/users.entity';

@UseGuards(RolesGuard)
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}


    @Post()
    @Roles(Role.Admin)
    async addUser(@Body() user: CreateUser) {
        return await this.usersService.addUser(user)
    }

    @Get()
    @Roles(Role.User)
    async getAllUsers(): Promise<Users[]> {
        return await this.usersService.getAllUsers()
    }
}
