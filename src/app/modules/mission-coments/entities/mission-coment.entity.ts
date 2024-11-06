import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, HasMany, Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { defaulTableSettings, primaryKey } from 'src/utils/global/GlobalSequelize';
import { mission } from '../../mission/entities/mission.entity';
import { users } from '../../user/entities/user.entity';

@ObjectType()
@Table(defaulTableSettings)
export class mission_coments extends Model {
  @Column({ ...primaryKey })
  @Field()
  id: string;

  @Column
  @Field()
  description: string;

  @ForeignKey(() => users)
  @Column
  @Field()
  user_id?: string;

  @BelongsTo(() => users)
  @Field(() => users, { nullable: true })
  user?: users;

  @ForeignKey(() => mission)
  @Column
  @Field()
  mission_id?: string;

  @BelongsTo(() => mission)
  @Field(() => mission, { nullable: true })
  mission?: mission;

  @Column
  @Field()
  deleted_at: Date;
}
