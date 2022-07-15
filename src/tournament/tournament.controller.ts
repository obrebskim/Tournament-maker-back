import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ResponseCreateTournament } from 'src/intefaces/TournamentInterface';
import { CreateTurnamentDto } from './dto/create-tournament.dto';
import { GetOneTournamentDto } from './dto/get-one-Tournament.dto';
import { TournamentService } from './tournament.service';

@Controller('tournament')
export class TournamentController {
    constructor(
        @Inject(TournamentService) private tournamentService: TournamentService
    ) {
    }

    @Get('/')
    getAll() {
        return this.tournamentService.getAll()
    }

    @Get('/tumbnails')
    getTumbnails() {
        return this.tournamentService.getTumbnails()
    }

    @Get('/:id')
    async getOne(@Param() params: GetOneTournamentDto) {
        return this.tournamentService.getOne(params.id)
    }

    @Post('/')
    async createTournament(
        @Body() newTournament: CreateTurnamentDto,
    ): Promise<ResponseCreateTournament> {
        return this.tournamentService.createTournament(newTournament)
    }
}
