import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "user@mail.ru", description: "Это email"})
    readonly email: string;

    @ApiProperty({example: "qwerty", description: "Это password"})
    readonly password: string;
}