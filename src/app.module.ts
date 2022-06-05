import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Store } from './stores/entities/store.entity';
import { StoresController } from './stores/stores.controller';
import { StoresService } from './stores/stores.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'my_local_password',
      database: 'my_stores_db', // ** must exist **
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['src/database/migrations/*{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Store]),
  ],

  controllers: [AppController, StoresController],
  providers: [AppService, StoresService],
})
export class AppModule { }
