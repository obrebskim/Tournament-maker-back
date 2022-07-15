import { Injectable } from '@nestjs/common';
import { ResponseCreateTournament, TournamentInterface, TournamentTumbnailInterface } from 'src/intefaces/TournamentInterface';
import { DataSource } from 'typeorm'
import { CreateTurnamentDto } from './dto/create-tournament.dto';
import { GetOneTournamentDto } from './dto/get-one-Tournament.dto';
import { Tournament } from './tournament.entity';

@Injectable()
export class TournamentService {

    constructor(private dataSource: DataSource) { }

    async getAll(): Promise<TournamentInterface[]> {
        return await this.dataSource
            .createQueryBuilder()
            .select('tournament')
            .limit(10)
            .from(Tournament, 'tournament')
            .leftJoin('tournament.currency', 'currency.code')
            .leftJoin('tournament.country', 'country.name')
            .leftJoin('tournament.owner', 'user.id')
            .getMany()
    }

    async getOne(id: string): Promise<TournamentInterface> {
        return await this.dataSource
            .createQueryBuilder()
            .select('tournament')
            .limit(10)
            .from(Tournament, 'tournament')
            .leftJoin('tournament.currency', 'currency.code')
            .leftJoin('tournament.country', 'country.name')
            .leftJoin('tournament.owner', 'user.id')
            .where('tournament.id = :id', { id })
            .getOne()
    }

    async createTournament(newTournament: CreateTurnamentDto): Promise<ResponseCreateTournament> {
        const tournament = new Tournament();
        tournament.address = newTournament.address;
        tournament.city = newTournament.city;
        tournament.country_code = newTournament.country;
        tournament.currency_code = newTournament.currency;
        tournament.date = newTournament.date;
        tournament.description = newTournament.description;
        tournament.image = newTournament.image;
        tournament.name = newTournament.name;
        tournament.owner_id = newTournament.owner;
        tournament.pool = newTournament.pool;
        tournament.type = newTournament.type;
        tournament.website = newTournament.website;

        await tournament.save();
        return {
            isSuccess: true,
            id: tournament.id
        };
    }

    async getTumbnails(): Promise<TournamentTumbnailInterface[]> {
        return await this.dataSource
            .createQueryBuilder()
            .select(['tournament.id', 'tournament.name', 'tournament.city', 'tournament.pool', 'tournament.currency', 'tournament.description', 'tournament.date', 'tournament.time', 'tournament.price', 'tournament.image'])
            .limit(10)
            .from(Tournament, 'tournament')
            .leftJoin('tournament.currency', 'currency.code')
            .getMany()
    }
}


