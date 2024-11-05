import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, HasMany, Table, Model } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';
import { users } from '../../user/entities/user.entity';

@ObjectType()
@Table(defaulTableSettings)
export class agency extends Model {
  @Column({...primaryKey})
  @Field({ nullable: true })
  id: string;

  @Column
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ unique: true })
  @Field()
  cnpj: string;

  @Column
  @Field({ nullable: true })
  bio: string;

  @HasMany(() => users)
  users: users[];
}
