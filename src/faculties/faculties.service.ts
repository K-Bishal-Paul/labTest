import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly repo: Repository<Faculty>,
  ) {}

  async create(dto: CreateFacultyDto): Promise<Faculty> {
    return this.repo.save(this.repo.create(dto));
  }
}