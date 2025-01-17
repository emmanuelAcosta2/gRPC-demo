import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UsersServiceController, CreateUserDto, UpdateUserDto, UsersServiceControllerMethods, FindOneUserDto, PaginationDto, Users } from '@app/common';
import { Observable } from 'rxjs';


@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController{
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  findAllUsers() {
    return this.usersService.findAll();
  }


  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }


  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }


  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }
  
  queryUsers(request: Observable<PaginationDto>): Observable<Users> {
    return this.usersService.queryUsers(request);
  }
}
