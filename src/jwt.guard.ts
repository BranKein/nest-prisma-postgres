import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    if (request.headers['authorization'] === undefined) {
      return false;
    }

    const fullToken: string = request.headers['authorization'];
    const splitToken: string[] = fullToken.split(' ');

    if (splitToken.length !== 2) {
      return false;
    }

    const prefix: string = splitToken[0];
    const jwtToken: string = splitToken[1];

    if (prefix.toLowerCase() !== 'token' || jwtToken.length === 0) {
      return false;
    }

    return true;
  }
}
