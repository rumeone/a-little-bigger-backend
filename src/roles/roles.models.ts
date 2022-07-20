import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.models";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: "1", description: "Это id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "ADMIN", description: "Это пример роли"})
    @Column({type: DataType.STRING, unique: true, allowNull: true})
    value: string;

    @ApiProperty({example: "Администратор", description: "Это пример описания"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}