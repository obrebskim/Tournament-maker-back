import { CountryInterface } from "src/intefaces/CountryInterface";
import { Tournament } from "src/tournament/tournament.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity implements CountryInterface {

    @PrimaryColumn({
        length: 3,
    })
    country_code: string;

    @Column({
        length: 56
    })
    name: string

    @OneToMany(type => Tournament, entity => entity.country)
    @JoinColumn()
    country: Tournament[];
}