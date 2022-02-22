import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "./dto/user.dto";

@Controller('api/auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post("login")
    login(@Body() user: UserDto): {token: string} {
        return this.authService.login(user);
    }
}
