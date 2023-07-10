import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Response } from 'express';
import { Observable, map } from 'rxjs';
import GlobalResponse from 'src/shared/interfaces/GlobalResponse';


@Injectable()
export class ResponseHandlerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res = context.switchToHttp().getResponse<Response>()
    
    return next
      .handle()
      .pipe(
        map(({ data=null, message='', status=200 }: GlobalResponse) => {
          res.status(status).json({ data, message })
        })
      )
  }
}
