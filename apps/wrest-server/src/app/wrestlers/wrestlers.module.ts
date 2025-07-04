import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wrestler } from './entities/wrestler.entity';
import { WrestlersService } from './services/wrestlers.service';
import { WrestlersController } from './controllers/wrestlers.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wrestler]), // Регистрация сущности для модуля
  ],
  controllers: [WrestlersController], // Все контроллеры модуля
  providers: [WrestlersService], // Все сервисы модуля
  exports: [WrestlersService], // Какие сервисы доступны другим модулям
})
export class WrestlersModule {}
