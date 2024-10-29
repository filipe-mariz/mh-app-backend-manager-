import { api_tokens } from './login.entity';

export const apiTokenProviders = [
  {
    provide: 'API_TOKEN_REPOSITORY',
    useValue: api_tokens
  }
];