import { ObjectType, Field} from '@nestjs/graphql';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';
import { agency } from '../../mission-agency/entities/mission-agency.entity';

@ObjectType()
@Table(defaulTableSettings)
export class users extends Model {
  @Column({...primaryKey})
  @Field()
  id: string;

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

  @ForeignKey(() => agency)
  @Column({ allowNull: true })
  @Field({ nullable: true })
  mission_agency_id?: string;

  @BelongsTo(() => agency)
  @Field(() => agency, { nullable: true })
  missionAgency?: agency;

  @Column
  @Field()
  deleted_at: Date;
}
