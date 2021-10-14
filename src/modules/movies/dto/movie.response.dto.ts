import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsOptional, IsNumber } from "class-validator";

export class MovieResponseDto {
  public movieId: number;
  @ApiProperty({ example: "film", description: "film name" })
  @IsString()
  public name: string;

  @ApiProperty({ example: "film", description: "film description" })
  public genre: number;

  @ApiProperty({ example: "film", description: "film release date" })
  @IsString()
  public releaseDate: string;

  @ApiProperty({ example: "film", description: "created by" })
  public createdBy: string;

  @ApiProperty({ example: "film", description: "created on" })
  public createdAt: Date;

  @ApiProperty({ example: "film", description: "updated by" })
  public updatedBy: string;

  @ApiProperty({ example: "film", description: "updated on" })
  public updatedAt: Date;
}
