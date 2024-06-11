import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { ListModel } from './entities/list.model';


@Module({
  imports: [
    SequelizeModule.forFeature([ListModel]),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
