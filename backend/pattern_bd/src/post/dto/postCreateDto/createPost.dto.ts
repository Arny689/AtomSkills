import { IsNotEmpty } from "class-validator"

export class CreatePost {
    @IsNotEmpty()
    readonly name: string
}