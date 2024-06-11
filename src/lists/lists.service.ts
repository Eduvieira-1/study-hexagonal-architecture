import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListModel } from './entities/list.model';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel(ListModel)
    private listModel: typeof ListModel,
  ) {}

  create(createListDto: CreateListDto) {
   return this.listModel.create(createListDto);
  }

  findAll() {
    return `This action returns all lists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
