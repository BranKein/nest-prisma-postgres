import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetTestController } from './get-test/get-test.controller';
import { GetTestService } from './get-test/get-test.service';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { OwnerService } from './owner/owner.service';
import { OwnerController } from './owner/owner.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    GetTestController,
    CatsController,
    OwnerController,
  ],
  providers: [
    AppService,
    GetTestService,
    PrismaClientService,
    CatsService,
    OwnerService,
  ],
})
export class AppModule {}
