import { IsString } from 'class-validator';

export class CreateTrashDto {
    @IsString()
    name: string;
}