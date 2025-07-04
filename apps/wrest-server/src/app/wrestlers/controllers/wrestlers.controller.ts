import { Controller, Get, Post, Body } from '@nestjs/common';
import { WrestlersService } from '../services/wrestlers.service';

@Controller('wrestlers')
export class WrestlersController {
  constructor(private readonly wrestlersService: WrestlersService) {}

  @Post()
  create(@Body() wrestlerData: { name: string; weight: number }) {
    return this.wrestlersService.create(wrestlerData);
  }

  @Get()
  findAll() {
    return this.wrestlersService.findAll();
  }
}
