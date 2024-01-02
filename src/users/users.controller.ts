import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }
}
