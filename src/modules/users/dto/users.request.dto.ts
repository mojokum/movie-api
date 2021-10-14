import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class UsersRequestDto {
  public id: number;
  @ApiProperty({ example: "Kumar", description: "user name" })
  @IsString()
  public userName: string;

  @ApiProperty({ example: "test@test.com", description: "email id" })
  @IsString()
  public userEmail: string;

  @ApiProperty({ example: "Kumar", description: "user name" })
  @IsString()
  public password: string;

  @ApiProperty({ example: "film", description: "film description" })
  @IsBoolean()
  public isActive: boolean;

  @ApiProperty({ example: "film", description: "created by" })
  public createdBy: string;

  @ApiProperty({ example: "film", description: "created on" })
  public createdAt: Date;

  @ApiProperty({ example: "film", description: "updated by" })
  public updatedBy: string;

  @ApiProperty({ example: "film", description: "updated on" })
  public updatedAt: Date;
}
