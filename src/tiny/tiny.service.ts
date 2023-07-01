import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateTinyDto } from './dto/create-tiny.dto';
// import { UpdateTinyDto } from './dto/update-tiny.dto';
import { Tiny } from './entities/tiny.entity';

@Injectable()
export class TinyService {
  constructor(
    @InjectRepository(Tiny)
    private tinyRepository: Repository<Tiny>,
  ) { }
  
  async postData(data) {
    console.log("ssssssssssssssssssssssssssssssssssss service",data)
    let multipleArray=data
    
    let saveData = await this.tinyRepository.save(multipleArray);
    if (saveData) {
      return { status: true, message: 'Tine document data add successfuly' };
    } else {
      return { status: false, message: 'Something Went Wrong' };
    }
  }

  // findAll() {
  //   return `This action returns all tiny`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tiny`;
  // }

  // update(id: number, updateTinyDto: UpdateTinyDto) {
  //   return `This action updates a #${id} tiny`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tiny`;
  // }
}
