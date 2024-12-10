import { ObjectType, Field } from '@nestjs/graphql';
import { Column, HasOne, Table, Model } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';

@ObjectType()
@Table(defaulTableSettings)
export class Missionary extends Model {
  @Column({ ...primaryKey })
  @Field({ nullable: true })
  id: string;

  @Column
  @Field({ nullable: true })
  preferences: string;

  @Column
  @Field()
  deleted_at: Date;
}
