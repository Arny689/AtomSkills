import { IsNotEmpty } from "class-validator"

export class UpdatePost {

    @IsNotEmpty()
    readonly name: string
}