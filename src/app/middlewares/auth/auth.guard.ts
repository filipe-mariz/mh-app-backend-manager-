import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { api_tokens } from '../../modules/login/entities/login.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.validateRequest(request);
  }

  async validateRequest(req: any): Promise<boolean> {
    if (!req?.headers?.token) return false

    const is_auth = await api_tokens.findOne({
      where: {
        token: req.headers.token
      },
      raw: true
    });

    if (!is_auth) return false;

    return true;
  }
}
