import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterUserResponse } from 'src/intefaces/UserInterface';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        @Inject(UserService) private userService: UserService
    ) { }

    @Post('/register')
    async register(
        @Body() newUser: RegisterDto
    ): Promise<RegisterUserResponse> {
        return this.userService.register(newUser)
    }

}
