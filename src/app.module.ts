import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentModule } from './tournament/tournament.module';
import { CurrencyModule } from './currency/currency.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "tournamentmaker",
      entities: [
        "dist/**/**.entity{.ts,.js}"
      ],
      bigNumberStrings: false,
      logging: true,
      synchronize: true
    }),
    TournamentModule,
    CurrencyModule,
    CountryModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
