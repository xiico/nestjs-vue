import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return {
        message: 'User has been created successfully',
        newUser,
      };
    } catch (err) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }
  @Patch('/:id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDTO,
  ) {
    try {
      const existingUser = await this.userService.updateUser(
        userId,
        updateUserDto,
      );
      return {
        message: 'User has been successfully updated',
        existingUser,
      };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  @Get()
  async getUsers() {
    try {
      const userData = await this.userService.getAllUsers();
      return {
        message: 'All users data found successfully',
        userData,
      };
    } catch (err) {
      if (err.name === 'NotFoundException')
        throw new NotFoundException(err.message);
      throw new InternalServerErrorException(err.message);
    }
  }
  @Get('/:id')
  async getUser(@Param('id') userId: string) {
    try {
      const existingUser = await this.userService.getUser(userId);
      return {
        message: 'User found successfully',
        existingUser,
      };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  @Delete('/:id')
  async deleteUser(@Param('id') userId: string) {
    try {
      const deletedUser = await this.userService.deleteUser(userId);
      return {
        message: 'User deleted successfully',
        deletedUser,
      };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
