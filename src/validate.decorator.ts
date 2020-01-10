import {UseGuards, applyDecorators} from '@nestjs/common';
import { RefererGuard } from './referer.guard';
import { Referers } from './referers.decorator';

/**
 * Decorator that guards a controller route against empty or invalid referer headers.
 * 
 * @param referers a single referer to validate or a list of referers.
 */
export function ValidateReferers(...referers: string[]) {
    return applyDecorators(
        Referers(...referers),
        UseGuards(RefererGuard)
    );
}
