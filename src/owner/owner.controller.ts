import { Controller, Get, UseGuards } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner as OwnerModel } from '@prisma/client';
import { JwtGuard } from '../jwt.guard';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  @UseGuards(JwtGuard)
  async getAll(): Promise<OwnerModel[]> {
    return this.ownerService.getAll();
  }
}
