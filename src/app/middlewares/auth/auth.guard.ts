import { CanActivate, ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, firstValueFrom } from 'rxjs';
import { IAuthProto } from 'src/utils/global/globalInterface';

@Injectable()
export class AuthGuard implements CanActivate {
  private authService: IAuthProto;

  constructor(
    @Inject('AUTH_SERVICE')
    private readonly client: ClientGrpc,
  ) {
    this.authService = this.client.getService('AuthenticationService');
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    return this.validateRequest(ctx.headers.token);
  }

  private async validateRequest(data: string) {
    const response = await firstValueFrom(
      this.authService.ValidToken({
        token: data
      })
    );

    return response?.authorization ? true : false;
  }
}
