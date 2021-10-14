import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsOptional, IsNumber } from "class-validator";

export class FilmCommentsRequestDto {

  public commentId: number;

  @ApiProperty({ example: "3434", description: "film id" })
  @IsNumber()
  public userId: number;

  @ApiProperty({ example: "12", description: "userId" })
  @IsNumber()
  public movieId: number;

  @ApiProperty({ example: "comments", description: "comments" })
  @IsString()
  public comments: string;

  @ApiProperty({ example: "film", description: "created on" })
  public createdAt: Date;
}
