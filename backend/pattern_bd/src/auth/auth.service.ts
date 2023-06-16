import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {}

    async signIn(email: string, password: string): Promise<any> {
        const user= await this.usersService.getUser(email)

        const isMatch = await bcrypt.compare(password, user.password)

        if (! isMatch) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.id, email: user.email }

        const token = await this.jwtService.signAsync(payload)

        return token
    }
}
