import { ObjectType, Field} from '@nestjs/graphql';
import { Table, Column, Model } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';

@ObjectType()
@Table(defaulTableSettings)
export class users extends Model {
  @Column(primaryKey)
  id: number;

  @Column
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ unique: true })
  @Field()
  cpf: string;

  @Column({ unique: true })
  @Field()
  whatsapp: string;

  @Column
  @Field()
  password: string;

  @Column
  deleted_at: Date;
}
