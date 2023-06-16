import { IsEmail, IsNotEmpty, IsOptional, IsStrongPassword, Matches } from "class-validator"
import { Role } from "../roles"

export class CreateUser {

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsNotEmpty()
    // @Matches('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$')
    readonly password: string

    @IsOptional()
    readonly roles: Role[]
}