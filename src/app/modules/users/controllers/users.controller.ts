import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto, UserConfirmation } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { BasesController } from '../../../base/controllers';

@Controller('users')
export class UsersController extends BasesController {
  constructor(private readonly usersService: UsersService) {
    super();

    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  };

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    try {
      const resp = await this.usersService.create(createUserDto);
      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Post('confirmation')
  public async userConfirmation(@Body() createUserDto: UserConfirmation) {
    try {
      const resp = await this.usersService.UserConfirmation(createUserDto);
      return resp;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const resp = await this.usersService.findAll();
      return resp;
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    try {
      const resp = await this.usersService.findOne({ id });
      return resp;
    } catch (error) {
      return this.handleError(error);
    };
  };

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      const resp = await this.usersService.update(updateUserDto, { id });
      return resp;
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    try {
      return this.usersService.remove({ id });
    } catch (error) {
      return this.handleError(error);
    };
  };
};
