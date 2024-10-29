import { Column, Model, Table } from "sequelize-typescript";
import { primaryKey } from '../../../../utils/global/GlobalSequelize';

@Table({ timestamps: true, underscored: true })
export class api_tokens extends Model {
    @Column(primaryKey)
    public id: number;

    @Column
    public token: string;

    @Column
    public user_id: number;
};
