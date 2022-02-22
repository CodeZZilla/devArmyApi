import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    login(dto: UserDto): {token: string} {
        const user = AuthService.validate(dto);
        return this.generateToken(user);
    }

    private generateToken(user: UserDto): {token: string} {
        const payload = {username: user.username};
        return {
            token: this.jwtService.sign(payload)
        };
    }

    private static validate(user: UserDto): UserDto {
        if (user.username === "devarmy" && user.password === "devarmy") {
            return user;
        }

        throw new UnauthorizedException({message: "Bad username or password"})
    }

}
