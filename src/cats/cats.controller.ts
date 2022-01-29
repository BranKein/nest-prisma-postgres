import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats as CatsModel } from '@prisma/client';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getAll(): Promise<CatsModel[]> {
    return this.catsService.getAll();
  }

  @Get('with-owner')
  async getAllWithOwner(): Promise<CatsWithOwner[]> {
    return this.catsService.getAllWithOwner();
  }
}
