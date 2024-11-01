import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    console.log(ctx.headers.token)
    const request = context.switchToHttp().getRequest();

    return this.validateRequest(request);
  }

  async validateRequest(req: any): Promise<boolean> {
    return true;
  }
}
