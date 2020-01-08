import { SetMetadata } from '@nestjs/common';

export const Referers = (...referers: string[]) => SetMetadata('referers', referers);