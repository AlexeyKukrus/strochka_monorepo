import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: Partial<User>): Promise<User> {
    return await this.usersService.create(user);
  }
}
