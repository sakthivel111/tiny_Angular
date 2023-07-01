import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TinyService } from './tiny.service';
import { CreateTinyDto } from './dto/create-tiny.dto';
import { UpdateTinyDto } from './dto/update-tiny.dto';

@Controller('tiny')
export class TinyController {
  constructor(private readonly tinyService: TinyService) {}

  @Post('tinyDocumentData')
  async create(@Body() data: any, @Res() res: any) {
    try {
      await this.tinyService.postData(data)
      res.status(HttpStatus.OK).json({
        success: true,
        message: 'Amendment created successfully',
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Something went wrong',
      });
    }
    

    // console.log('document dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
  }

  // @Get()
  // findAll() {
  //   return this.tinyService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tinyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTinyDto: UpdateTinyDto) {
  //   return this.tinyService.update(+id, updateTinyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tinyService.remove(+id);
  // }
}
