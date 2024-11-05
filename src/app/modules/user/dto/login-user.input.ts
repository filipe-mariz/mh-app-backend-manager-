import { Observable } from "rxjs";

export class CreateGrpcClientDto {
    authType?: string;
    siglaApp?: string;
    userId: string;
    password: string;
}

export interface IAuthProto {
    Create(data: CreateGrpcClientDto): Observable<any>,
}