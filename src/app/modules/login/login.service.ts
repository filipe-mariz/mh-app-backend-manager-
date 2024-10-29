import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { users } from '../users/entities/user.entity';
import { api_tokens } from './entities/login.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';

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

    if (!user) throw new Error('INVALID_CREDENTIALS');

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) throw new Error('INVALID_CREDENTIALS');

    const dataToken = JSON.stringify(data);

    const token = bcrypt.hashSync(dataToken, 10)

    const resp = await this.apiTokenRepository.create<api_tokens>({
      token,
      user_id: user.id
    });

    return {
      token: resp.token,
      user_id: user.id,
    }
  };
};
