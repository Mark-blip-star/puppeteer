import {  dataDto } from './dto/get-data.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData(@Query() query:dataDto) {
    query.url?query.url:query.url = 'https://dev.amidstyle.com'
    return this.appService.getData(query);
  }
}
