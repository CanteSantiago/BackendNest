import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, RegisterDto, UpdateAuthDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<import("./interfaces/login-response").LoginResponse>;
    register(registerDto: RegisterDto): Promise<import("./interfaces/login-response").LoginResponse>;
    findAll(req: Request): any;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
