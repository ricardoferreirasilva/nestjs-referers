import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Request} from "express"
@Injectable()
export class RefererGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> {
    const request : Request = context.switchToHttp().getRequest();
    const requestReferer = request.headers.referer;

    // If the referer exists.
    if(requestReferer){
      const referers = this.reflector.get<string[]>('referers', context.getHandler());

      //For each of specified valid referers.
      for(let referer of referers){
          const refererRegex = this.produceRefererRegex(referer);
          const match = requestReferer.match(refererRegex);
          //If it matches, request referer is valid.
          if(match) return true;
      }
      //Referer did not match with any possibilities.
      return false;
    }
    //If request has no referer, reject.
    return false;
  }

  private produceRefererRegex(referer : string) : RegExp {
        referer = referer.replace(/\*/g,"(\\S*)");
        const refererRegex = new RegExp("^" + referer + "$","gm");
        return refererRegex;
  }
}