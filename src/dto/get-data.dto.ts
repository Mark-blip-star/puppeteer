import { IsString } from 'class-validator';

export class dataDto {

  @IsString()
  url: string;
}
