import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { RefererGuard } from './referer.guard';
import { Referers } from './referers.decorator';

export function ValidateReferers(...referers: string[]) {
  return applyDecorators(
    Referers(...referers),
    UseGuards(RefererGuard)
  );
}