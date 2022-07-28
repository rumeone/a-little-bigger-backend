import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "@nestjs/common";
import {Posts} from "../posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: "1", description: "Это id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "user@mail.ru", description: "Это email"})
    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @ApiProperty({example: "qwerty", description: "Это password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "true", description: "Это ты в бане или нет"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: "Плохой ник", description: "Это причина бана"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Posts)
    posts: Posts[]
}