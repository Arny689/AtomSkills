import { Controller, Delete, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { Posts } from 'src/entities/post.entity';
import { CreatePost } from './dto/postCreateDto';
import { Public } from 'src/decorator/access.decorator';
import { UpdatePost } from './dto/postUpdateDto';

@Controller('post')
export class PostController {


    constructor(
        private postService: PostService) {}
    
    @Public()
    @Get('allPosts')
    async getAllPosts(): Promise<Posts[]> {
        return await this.postService.getAllPosts()
    }

    @Get(':id')
    async getOnePostByPost(@Param('id') id: string): Promise<Posts> {
        return await this.postService.getOnePostByPost(+id)
    }

    @Delete(':id')
    async removePost(@Param('id') id: string) {
        return await this.postService.removePost(+id)
    }

    @Public()
    @Post()
    async createPost(@Body() createPost: CreatePost) {
       return await this.postService.createPost(createPost)
    }

    @Public()
    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() updatePost: UpdatePost) {
        return await this.postService.updatePost(updatePost, +id)
    }
}
