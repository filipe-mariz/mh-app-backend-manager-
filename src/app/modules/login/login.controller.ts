import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { BasesController } from '../../base/controllers';

interface Login {
  email: string;
  password: string;
}

@Controller('login')
export class LoginController extends BasesController {
  constructor(private readonly loginService: LoginService) {
    super();

    this.login = this.login.bind(this);
  }

  @Post()
  async login(@Body() createLoginDto: Login) {
    try {
      const resp = await this.loginService.login(createLoginDto);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }
}
