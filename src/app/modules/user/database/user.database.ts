import { QueryData } from "src/utils/global/globalInterface";
import { CreateUserInput } from "../dto/create-user.input";
import { users } from "../entities/user.entity";

export abstract class UserDatabase {
    abstract create(createUserInput: CreateUserInput): Promise<users>;
    abstract findOne(filter: QueryData): Promise<users[]>;
    abstract findAll(): Promise<users[]>;
}