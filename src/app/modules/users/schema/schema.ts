import { object, string, number } from "yup";

export const schemma = object().shape({
    name: string().required().label('Nome').trim(),
    email: string().required().email().label('E-mail').trim(),
    password: string().required().label('Senha').trim(),
});
