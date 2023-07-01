import { Module } from '@nestjs/common';
import { TinyService } from './tiny.service';
import { TinyController } from './tiny.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tiny } from './entities/tiny.entity';

@Module({
  controllers: [TinyController],
  imports:[TypeOrmModule.forFeature([
    Tiny
  ])],
  providers: [TinyService]
})
export class TinyModule {}
