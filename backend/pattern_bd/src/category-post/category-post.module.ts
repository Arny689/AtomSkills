import { Module } from '@nestjs/common';
import { CategoryPostService } from './category-post.service';
import { CategoryPostController } from './category-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryPost } from 'src/entities/categoryPost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryPost])],
  providers: [CategoryPostService],
  controllers: [CategoryPostController]
})
export class CategoryPostModule {}
