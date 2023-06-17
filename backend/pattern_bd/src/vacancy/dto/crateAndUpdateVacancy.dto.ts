import { IsNotEmpty } from "class-validator";

export class CreateAndUpdateVacancy {
   
    @IsNotEmpty()
    readonly vacancyName: string

    @IsNotEmpty()
    readonly position: string

    @IsNotEmpty()
    readonly requrimentsForCandidate: string

    @IsNotEmpty()
    readonly responsibilities: string

    @IsNotEmpty()
    readonly jonConditions: string

    @IsNotEmpty()
    readonly hrStaff: string[]

    @IsNotEmpty()
    readonly criteriaForEvaluatingCandidates: string

    @IsNotEmpty()
    readonly timeOfInterviews: Date


}