import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto, UserConfirmation } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { users } from '../entities/user.entity';
import { QueryData } from '../../../../utils/global/globalInterface';
import * as bcrypt from 'bcrypt';
import { ProductsService } from './usersConfirmation.service';

@Injectable()
export class UsersService {
  private readonly repository = this.usersRepository.scope('defaultOptions');

  constructor(
    @InjectModel(users)
    private readonly usersRepository: typeof users,
    private readonly confirmation: ProductsService,
  ) { };

  public async create(createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      return {
        exeption: 'PASSWORD_NOT_MATCH'
      }
    }

    const user: ICreateUserResponse = await this.repository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      cpf: createUserDto.cpf,
      whatsapp: createUserDto.whatsapp,
      password: bcrypt.hashSync(createUserDto.password, 10),
    });

    const repoUserConfirmation = await this.confirmation.create({
      userId: user.id,
      email: createUserDto.email
    });

    return { user, repoUserConfirmation };
  };

  public async UserConfirmation(confirmation: UserConfirmation): Promise<IUserConfirmation> {
    const confirmationData = await this.confirmation.findOne(confirmation.email);

    if (confirmationData.confirmationCode !== confirmation.confirmationCode) {
      return {
        code: 'BAD_TRY',
        message: 'code not match'
      }
    }

    return {
      code: 'VALIDATION_SUCCESS'
    };
  }


  findAll(): Promise<users[]> {
    return this.repository.findAll<users>();
  };

  findOne(filter: QueryData): Promise<users> {
    return this.repository.findOne<users>({
      where: { ...filter }
    });
  };

  update(updateUserDto: UpdateUserDto, filter: QueryData): Promise<[affectedCount: number]> {
    return this.repository.update<users>(updateUserDto, {
      where: { ...filter },
    });
  };

  remove(filter: QueryData): Promise<number> {
    return this.repository.destroy<users>({
      where: { ...filter }
    });
  };
};
