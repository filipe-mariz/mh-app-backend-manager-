import { ObjectType, Field } from '@nestjs/graphql';
import { Column, HasMany, Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';
import { agency } from '../../mission-agency/entities/mission-agency.entity';
import { mission_coments } from '../../mission-coments/entities/mission-coment.entity';

@ObjectType()
@Table(defaulTableSettings)
export class mission extends Model {
  @Column({ ...primaryKey })
  @Field()
  id: string;

  @Column
  @Field()
  name: number;

  @Column
  @Field()
  poster: string;

  @Column
  @Field()
  description: string;

  @Column
  @Field({ nullable: true })
  requirements?: string;

  @Column
  @Field()
  startDate: string;

  @Column
  @Field()
  endData: string;

  @ForeignKey(() => agency)
  @Column
  @Field()
  mission_agency_id?: string;

  @BelongsTo(() => agency)
  @Field(() => agency, { nullable: true })
  missionAgency?: agency;

  @HasMany(() => mission_coments)
  missionComents: mission_coments[];

  @Column
  @Field()
  deleted_at: Date;
}
