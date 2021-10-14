import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsOptional, IsNumber } from "class-validator";

export class FilmGenericResponseDto {

  public genreId: number;
  
  @ApiProperty({ example: "film", description: "film name" })
  @IsString()
  public type: string;

  @ApiProperty({ example: "film", description: "film description" })
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
