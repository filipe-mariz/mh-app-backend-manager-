import { QueryData } from "src/utils/global/globalInterface";
import { UpdateMissionAgencyInput } from "../dto/update-mission-agency.input";

export abstract class AgencyDatabase {
	abstract create<agency>(createUserInput: agency): Promise<agency>;
	abstract findAll<agency>(): Promise<agency[]>;
	abstract findOne<agency>(filter: QueryData): Promise<agency>;
	abstract update<agency>(updateUserInput: UpdateMissionAgencyInput, filter: QueryData): Promise<agency>;
	abstract remove<agency>(filter: QueryData): Promise<agency>;
}