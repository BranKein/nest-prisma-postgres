import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../prisma-client/prisma-client.service';

import { Prisma, Cats as CatsModel } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private readonly dbService: PrismaClientService) {}

  getAll(): Promise<CatsModel[]> {
    return this.dbService.cats.findMany();
  }

  getAllWithOwner(): Promise<CatsWithOwner[]> {
    return this.dbService
      .$queryRaw(
        Prisma.sql`select o.index, o.name, c.index cat_idx, c.name cat_name from "Owner" o join "Cats" c on o.index = c.owner`,
      )
      .then((res: any[]) => {
        return res.map((v) => {
          return {
            cat_idx: v.index,
            cat_name: v.name,
            cat_owner_idx: v.cat_idx,
            cat_owner_name: v.cat_name,
          };
        });
      });
  }
}
