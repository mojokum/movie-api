import { Inject, Injectable } from "@nestjs/common";
import { USERSETTING_REPOSITORY, USERS_REPOSITORY } from "src/constants";
import { UserSettingRequestDto } from "src/models/dto/userSetting.request.dto";
import { UserSetting } from "src/models/entity";
import { Users } from "../../models/entity/users.entity";
import { UsersRequestDto } from "./dto/users.request.dto";

@Injectable()
export class UsersService {
  constructor( @Inject(USERS_REPOSITORY)
  private readonly users: typeof Users,
  @Inject(USERSETTING_REPOSITORY)
  private readonly userSetting: typeof UserSetting
  ) {} 


   /**
   * Method used to fetch the users
   */
    async findAll(): Promise<Users[]> {
        return await this.users.findAll();
      }


  /**
   * Method used to create users
   * @param UsersRequestDto
   */
  async createUser(user: UsersRequestDto): Promise<any> {
  
    const result = await this.users.create(user);
    return result;
  }

  async createProfileSetting(setting: UserSettingRequestDto): Promise<any> {
    const result = await this.userSetting.create(setting)
  }

  async login(user: any): Promise<any> {
    const result = await this.users.findOne({where: {userEmail: user.emailId}})
    if (!result) {
      throw Error("User Not available")
    }
    return result
  }
}
