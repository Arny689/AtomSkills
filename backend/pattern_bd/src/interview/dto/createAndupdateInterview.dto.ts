import { IsNotEmpty } from "class-validator";

export class CreateAndUpdateInterview {

    @IsNotEmpty()
    readonly date: string

    @IsNotEmpty()
    readonly time: Date

    @IsNotEmpty()
    readonly place: string

    @IsNotEmpty()
    readonly candidate: string

    @IsNotEmpty()
    readonly expert: string

    @IsNotEmpty()
    readonly hrDepartmentEmployee: string

    readonly candidateInfo: string

    readonly vacancyInfo: string

    readonly requirenmentsForVacancy: string
}