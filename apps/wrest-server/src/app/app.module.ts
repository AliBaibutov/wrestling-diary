// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WrestlersModule } from './wrestlers/wrestlers.module';

@Module({
  imports: [
    // Настройка подключения к PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: '@ali8895',
      database: 'wrestling_diary',
      autoLoadEntities: true, // Автоматически подхватывает все сущности
      synchronize: true, // Только для разработки!
    }),

    // Подключение функционального модуля
    WrestlersModule,
  ],
})
export class AppModule {}
