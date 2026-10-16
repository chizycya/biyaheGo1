import { Controller, Get, Post, Put, Delete, Body , Param, ParseIntPipe,} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
getUserById(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.usersService.getUserById(id);
}
  @Post()
createUser(
  @Body() body: CreateUserDto,
) {
  return this.usersService.createUser(body);
}
  @Put(':id')
updateUser(
  @Param('id', ParseIntPipe) id: number,
  @Body() body: UpdateUserDto,
) {
  return this.usersService.updateUser(id, body);
}
@Delete(':id')
deleteUser(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.usersService.deleteUser(id);
}
}