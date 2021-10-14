import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsOptional, IsNumber } from "class-validator";

export class UserSettingResponseDto {

  public settingId: number;

  @ApiProperty({ example: "3434", description: "film id" })
  @IsNumber()
  public userId: number;

  @ApiProperty({ example: "12", description: "userId" })
  @IsNumber()
  public genreId: number;
  
  @ApiProperty({ example: "film", description: "created by" })
  public createdBy: string;

  @ApiProperty({ example: "film", description: "created on" })
  public createdAt: Date;

  @ApiProperty({ example: "film", description: "updated by" })
  public updatedBy: string;

  @ApiProperty({ example: "film", description: "updated on" })
  public updatedAt: Date;
}
