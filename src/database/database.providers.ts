import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { users } from '../app/modules/users/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { api_tokens } from 'src/app/modules/users/entities/login.entity';

const models = [users, api_tokens]

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'postgres',
        logging: false
      });

      sequelize.addModels(models);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export const sequelizeModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  autoLoadModels: true,
  synchronize: true,
  logging: false,
  models,
});

export const mongooseModule = MongooseModule.forRoot('mongodb://localhost:27017/mission-house');
