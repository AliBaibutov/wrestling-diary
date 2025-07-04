import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wrestler } from '../entities/wrestler.entity';

@Injectable()
export class WrestlersService {
  constructor(
    @InjectRepository(Wrestler)
    private wrestlersRepository: Repository<Wrestler>
  ) {}

  async create(wrestler: Partial<Wrestler>): Promise<Wrestler> {
    return this.wrestlersRepository.save(wrestler);
  }

  async findAll(): Promise<Wrestler[]> {
    return this.wrestlersRepository.find();
  }
}
