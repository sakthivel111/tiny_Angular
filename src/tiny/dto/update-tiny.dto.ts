import { PartialType } from '@nestjs/mapped-types';
import { CreateTinyDto } from './create-tiny.dto';

export class UpdateTinyDto extends PartialType(CreateTinyDto) {}
