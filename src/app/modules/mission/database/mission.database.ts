import { QueryData } from "src/utils/global/globalInterface";
import { UpdateMissionInput } from "../dto/update-mission.input";

export abstract class MissionDatabase {
	abstract create<mission>(createUserInput: mission): Promise<mission>;
	abstract findAll<mission>(): Promise<mission[]>;
	abstract findOne<mission>(filter: IMissionFilter): Promise<mission>;
	abstract update<mission>(updateUserInput: UpdateMissionInput, filter: QueryData): Promise<mission>;
	abstract remove<mission>(filter: QueryData): Promise<mission>;
	abstract findByAgency<mission>(filter: IMissionFilter): Promise<mission[]>
}