import { Controller, Get, Post, Body, Param, Delete, Query, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BasesController } from '../../base/controllers';
import { QueryData } from '../../../utils/global/globalInterface';
import { AuthGuard } from '../../middlewares/auth/auth.guard';

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
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const resp = await this.usersService.create(createUserDto);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Get()
  async findAll(@Query() filter: QueryData) {
    try {
      const resp = await this.usersService.findAll(filter);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Get(':id')
  public async findOne(
    @Param('id') id: number,
    @Query() filter: QueryData
  ) {
    try {
      const resp = await this.usersService.findOne({
        id,
        company_id: filter.company_id
      });

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    };
  };

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Query() filter: QueryData,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      const resp = await this.usersService.update(updateUserDto, {
        id,
        company_id: filter.company_id
      });

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  };

  @Delete(':id')
  public async remove(
    @Param('id') id: number,
    @Query() filter: QueryData
  ) {
    try {
      return this.usersService.remove({
        id,
        company_id: filter.company_id
      });
    } catch (error) {
      return this.handleError(error);
    };
  };
};
