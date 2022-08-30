import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log(email);
    console.log(user);
    return user;
  }
}
