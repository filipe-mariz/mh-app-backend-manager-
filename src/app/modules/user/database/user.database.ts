import { QueryData } from "src/utils/global/globalInterface";
import { CreateUserInput } from "../dto/create-user.input";
import { UpdateUserInput } from "../dto/update-user.input";

export abstract class UserDatabase {
	abstract create<users>(createUserInput: CreateUserInput): Promise<users>;
	abstract findAll<users>(): Promise<users[]>;
	abstract findOne<users>(filter: QueryData): Promise<users>;
	abstract update<users>(updateUserInput: UpdateUserInput, filter: QueryData): Promise<users>;
	abstract remove<users>(filter: QueryData): Promise<users>;
}