import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'The ID of the author of the post' })
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  author: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image?: string;
}
