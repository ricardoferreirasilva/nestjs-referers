import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Request} from "express"
@Injectable()
export class RefererGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> {
    const request : Request = context.switchToHttp().getRequest();
    const requestReferer = request.headers.referer;
    const referers = this.reflector.get<string[]>('referers', context.getHandler());
    return RefererGuard.validateReferer(requestReferer,referers);
  }
  /**
   * name
   */
  public static validateReferer(incomingReferer:string, validReferers: string[]) : boolean {

        // If the referer exists.
        if(incomingReferer){

          //For each of specified valid referers.
          for(let referer of validReferers){
              const refererRegex = this.produceRefererRegex(referer);
              const match = incomingReferer.match(refererRegex);
              //If it matches, request referer is valid.
              if(match) return true;
          }

          //Referer did not match with any possibilities.
          return false;

        }

        //If request has no referer, reject.
        return false;
  }
  private static produceRefererRegex(referer : string) : RegExp {
        referer = referer.replace(/\*/g,"(\\S*)");
        const refererRegex = new RegExp("^" + referer + "$","gm");
        return refererRegex;
  }
}