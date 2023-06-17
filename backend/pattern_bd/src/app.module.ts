import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PositionModule } from './position/position.module';
import { HttpModule } from '@nestjs/axios';
import { VacancyModule } from './vacancy/vacancy.module';
import { InterviewModule } from './interview/interview.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '../.env',
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      // type: configService.get('POSTGRES_CONNECTION'),
      host: 'localhost',
      port: 6001,
      username: 'qwerty',
      password: 'qwerty',
      database: 'testtt',
      synchronize: true,
      entities: [ __dirname + 'dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      migrationsTableName: "simple_migration_table",
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      // cli: {
      //   // Location of migration should be inside src folder
      //   // to be compiled into dist/ folder.
      //   migrationsDir: 'src/migrations',
      // },
    })
  }),
  UsersModule,
  AuthModule,
  PositionModule,
  HttpModule,
  VacancyModule,
  InterviewModule
],

  controllers: [],
  providers: []
})
export class AppModule {}
