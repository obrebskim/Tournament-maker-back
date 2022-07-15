import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { CurrencyInterface } from "src/intefaces/CurrencyInterface";
import { Tournament } from "src/tournament/tournament.entity";

@Entity()
export class Currency extends BaseEntity implements CurrencyInterface {
    @PrimaryColumn({
        length: 3,
    })
    currency_code: string;

    @Column({
        length: 25,
    })
    name: string;

    @OneToMany(type => Tournament, entity => entity.currency)
    @JoinColumn()
    currency: Tournament[];


}