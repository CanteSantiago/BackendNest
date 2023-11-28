import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { log } from 'console';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private authService:AuthService,
  ) {}

  
  canActivate(context:ExecutionContext): Promise<boolean> {
   
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log({token});
   
    return Promise.resolve(true);
  }



  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
