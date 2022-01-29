import { Controller, Get } from '@nestjs/common';
import { GetTestService } from './get-test.service';

@Controller('get-test')
export class GetTestController {
  constructor(private getTestService: GetTestService) {}

  @Get()
  async getAll(): Promise<any> {
    return this.getTestService.getAll();
  }
}
