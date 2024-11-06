import { Observable } from "rxjs";
export interface QueryData {
    id: number | string;
}

export class CreateGrpcClientDto {
    authType?: string;
    siglaApp?: string;
    userId: string;
    password: string;
}

export class AuthorizationValidate {
    token: string
}

export interface IAuthProto {
    Create(data: CreateGrpcClientDto): Observable<any>
    ValidToken(data: AuthorizationValidate): Observable<any>
}