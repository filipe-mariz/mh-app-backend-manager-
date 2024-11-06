import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { MongooseModule } from '@nestjs/mongoose';

import { users } from 'src/app/modules/user/entities/user.entity';
import { agency } from 'src/app/modules/mission-agency/entities/mission-agency.entity';
import { mission } from 'src/app/modules/mission/entities/mission.entity';
import { mission_coments } from 'src/app/modules/mission-coments/entities/mission-coment.entity';

const models = [agency, users, mission, mission_coments]
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
