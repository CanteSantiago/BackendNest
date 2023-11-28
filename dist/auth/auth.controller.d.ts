import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, RegisterDto } from './dto';
import { User } from './entities/user.entity';
import { LoginResponse } from './interfaces/login-response';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    register(registerDto: RegisterDto): Promise<LoginResponse>;
    findAll(req: Request): any;
    checkToken(req: Request): LoginResponse;
}
