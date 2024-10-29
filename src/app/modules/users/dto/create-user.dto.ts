export class CreateUserDto {
    name: string;
    cpf: string;
    whatsapp: string
    email: string;
    password: string;
    passwordConfirmation: string;
};

export class UserConfirmation {
    email: string;
    confirmationCode: string;
}