import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { api_tokens } from '../entities/login.entity';
import { users } from '../entities/user.entity';

interface Login {
  email: string;
  password: string;
}

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(users)
    private usersRepository: typeof users,
    @InjectModel(api_tokens)
    private apiTokenRepository: typeof api_tokens,
  ) {}

  async login(data: Login) {
    const user = await this.usersRepository.scope('defaultOptions').findOne<users>({
      where: { email: data.email },
      attributes: ['password', 'id', 'company_id']
    });

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);
    if (!user || !isPasswordValid) {
      return {
        code: 'INVALID_CREDENTIALS',
        message: 'email or password does not match'
      }
    }

    const resp = await this.apiTokenRepository.create<api_tokens>({
      token: bcrypt.hashSync(JSON.stringify(data), 100),
      user_id: user.id
    });

    return {
      token: resp.token,
      user_id: user.id,
    }
  };
};
