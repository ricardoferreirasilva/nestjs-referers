import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class RefererGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> {
    const request : Request = context.switchToHttp().getRequest();
    const requestReferer = request.headers.referer;
    console.log(requestReferer);
    const referers = this.reflector.get<string[]>('referers', context.getHandler());
    console.log(referers);
    for(let referer of referers){
        const refererRegex = this.produceRefererRegex(referer);
        console.log(refererRegex)
        const match = requestReferer.match(refererRegex);
        console.log(match);
        if(match) return true;
    }
    return false;
  }

  private produceRefererRegex(referer : string) : RegExp {
        referer = referer.replace(/\*/g,"(\\S*)");
        const refererRegex = new RegExp("^" + referer + "$","gm");
        return refererRegex;
  }
}