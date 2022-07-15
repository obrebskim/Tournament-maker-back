import { Tournament } from "src/tournament/tournament.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 255,
    })
    email: string;

    @OneToMany(type => Tournament, entity => entity.owner)
    @JoinColumn()
    tournaments: Tournament[];
}