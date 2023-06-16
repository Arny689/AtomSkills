import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePost } from './dto/postCreateDto';
import { UpdatePost } from './dto/postUpdateDto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>
    ) {}

    async getAllPosts(): Promise<Posts[]> {
        return this.postRepository.find()
    }

    async getOnePostByPost(id: number): Promise<Posts | null> {
        return this.postRepository.findOneBy({
            id
        })
    }

    async removePost(id: number): Promise<void> {
        this.postRepository.delete({
            id
        })
    }

    async createPost(post: CreatePost): Promise<Posts> {
        return this.postRepository.save({ ...post })
    }

    async updatePost(post: UpdatePost, postId: number): Promise<Posts> {
        await this.postRepository.update({id: postId}, {...post})
        return this.getOnePostByPost(postId)
    }
}
