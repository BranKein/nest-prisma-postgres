import { Injectable } from '@nestjs/common';

@Injectable()
export class GetTestService {
  getAll(): any {
    return 'hi?';
  }
}
