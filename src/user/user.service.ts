import { Injectable } from '@nestjs/common';
import { RegisterUserResponse } from 'src/intefaces/UserInterface';
import { DataSource } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(private dataSource: DataSource) { }

    async register(newUser: RegisterDto): Promise<RegisterUserResponse> {

        const { email } = newUser

        const existingUser = await this.dataSource
            .createQueryBuilder()
            .select('user.email')
            .from(User, 'user')
            .where('user.email = :email', { email })
            .getOne()

        console.log(existingUser)

        if (!existingUser) {
            const user = new User()
            user.email = newUser.email;
            await user.save();
            return user;
        } else {
            return {
                isSuccess: false,
                message: 'User with this email alredy exist!'
            }
        }
    }
}
