import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TournamentInterface } from "src/intefaces/TournamentInterface";
import { Currency } from "src/currency/currency.entity";
import { Country } from "src/country/country.entity";
import { User } from "src/user/user.entity";
import { userInfo } from "os";

@Entity()
export class Tournament extends BaseEntity implements TournamentInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column({
        length: 30,
    })
    address: string;

    @Column({
        type: 'date',
    })
    date: Date;

    @Column({
        length: 5,
    })
    time: string;

    @Column({
        type: 'float',
        precision: 7,
        scale: 2,
        default: 0
    })
    price: number;

    @Column({
        type: 'float',
        precision: 7,
        scale: 2,
        default: 0
    })
    pool: number;

    @Column({
        type: 'text',
        default: null,
        nullable: true,
    })
    description: string | null;

    @Column({
        length: 1000,
        default: null,
    })
    image: string | null;

    @Column({
        length: 1000,
        default: null,
    })
    url: string | null;

    @ManyToOne(type => Currency, entity => entity.currency_code)
    @JoinColumn({ name: 'currency_code' })
    currency: Currency

    @Column({
        name: 'currency_code',
    })
    currency_code: string;


    @ManyToOne(type => Country, entity => entity.country_code)
    @JoinColumn({ name: 'country_code' })
    country: Country;

    @Column({
        name: 'country_code',
    })
    country_code: string;

    @ManyToOne(type => User, entity => entity.id)
    @JoinColumn({ name: 'owner_id' })
    owner: User;

    @Column({
        name: 'owner_id',
    })
    owner_id: string;

    @Column({ type: 'int' })
    type: number;

    @Column()
    website: string;
}