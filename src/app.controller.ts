import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('profile')
  getHello(@Req() request: Request): string {
    console.log(request);
    return this.appService.getHello();
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect() {
    console.log('redirect to nestjs home');
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'this action adds a new cat';
  }
}
