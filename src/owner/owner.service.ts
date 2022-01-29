import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../prisma-client/prisma-client.service';

import { Owner as OwnerModel } from '@prisma/client';

@Injectable()
export class OwnerService {
  constructor(private readonly dbService: PrismaClientService) {}

  getAll(): Promise<OwnerModel[]> {
    return this.dbService.owner.findMany();
  }
}
