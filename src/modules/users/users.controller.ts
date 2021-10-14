import { Body, Controller, Get, Header, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserSettingRequestDto } from 'src/models/dto/userSetting.request.dto';
import { UsersRequestDto } from './dto/users.request.dto';
import { UsersReponseDto } from './dto/users.response.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

  /**
   * Method is used to fetch all users
   */
  @Get('/users')
  @ApiOperation({ summary: "Return all the Users" })
  @ApiResponse({ status: HttpStatus.OK, description: "The request has succeeded 4.", type: UsersReponseDto })
  async getAllUsers() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      console.error(error);
    }
  }
    
   /**
   * Method used to create User
   *
   */

  @Post('/register')
  @ApiOperation({ summary: "Register user" })
  @ApiResponse({ status: HttpStatus.OK, description: "The request has succeeded 4.", type: UsersReponseDto })
  
  async createUser(@Body() userRequestDto: UsersRequestDto): Promise<any> {
    try {
      Object.assign(userRequestDto, { createdBy: 'kumar' });
      return await this.userService.createUser(userRequestDto);
    } catch (error) {
      console.error(error);
    }
  }


  @Post('/profileSetting')
  @ApiOperation({ summary: "update User setting" })
  @ApiResponse({ status: HttpStatus.OK, description: "The request has succeeded 4.", type: UserSettingRequestDto })
  async updateProfileSetting(@Body() userSettingRequestDto: UserSettingRequestDto): Promise<any> {
    try {
      Object.assign(userSettingRequestDto, {createdBy: 'kumar'})
      return await this.userService.createProfileSetting(userSettingRequestDto);
    } catch (error) {
      console.error(error)
    }
  }

  @Post('/login')
  @ApiOperation({ summary: "Login information" })
  @ApiResponse({ status: HttpStatus.OK, description: "The request has succeeded 4."})
  async login(@Body() users: any): Promise<any> {
    try {
      const userInfo = await this.userService.login(users);
      console.log(userInfo.password)
      if (userInfo.password === users.password) {
        return "Login Sucess"
      } else {
        throw Error("Password mismatch")
      }
    } catch (error) {
      throw Error(error)
    }
  }
}
