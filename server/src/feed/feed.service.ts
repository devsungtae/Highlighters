import { Feed } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/repository/prisma.service';
import { getUrlMeta } from 'src/util/geturlmeta';
import { CreateFeedDto } from './dto/feed.dto';

@Injectable()
export class FeedService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFeed(createFeedDto: CreateFeedDto): Promise<Feed> {
    const { user_email, group_id, url } = createFeedDto;
    const result = await this.prismaService.feed.create({
      data: { user_email, group_id, url },
    });

    return result;
  }

  async findFeedById(id: number): Promise<Feed> {
    return await this.prismaService.feed.findUnique({
      where: { id },
    });
    
  }

  async findFeedByURL(url: string): Promise<Feed> {
    const result = await this.prismaService.feed.findFirst({
      where: { url: url },
    });

    return result;
  }

  async findFeedByGroupId(id: number): Promise<Feed[]> {
    const feeds = await this.prismaService.feed.findMany({
      where: { group_id: id },
    });

    return feeds;
  }

  async findGroupFeedWithOg(id: number): Promise<object[]> {
    const feeds = await this.findFeedByGroupId(id);

    const feedswithOg: object[] = [];
    // http meta data 가져오기
    for (const feed of feeds) {
      // url이 있으면 메타데이터 가져오기
      if (feed.url) {
        const meta = await getUrlMeta(feed.url);
        const feedwithOg = {
          ...feed,
          og_title: meta.title,
          og_desc: meta.desc,
          og_image: meta.image,
        };
        feedswithOg.push(feedwithOg);
      }
    }

    return feedswithOg;
  }

  async deleteFeedById(id: number): Promise<Feed> {
    const result = await this.prismaService.feed.delete({
      where: { id },
    });

    return result;
  }
}
