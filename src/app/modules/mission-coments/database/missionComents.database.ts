import { IFindMissionComents } from "../dto/find-mission-coment.input";

export abstract class MissionComentsDatabase {
	abstract create<mission_coments>(createUserInput: mission_coments): Promise<mission_coments>;
	abstract findAll<mission_coments>(filter: IFindMissionComents): Promise<mission_coments[]>;
}