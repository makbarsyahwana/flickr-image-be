import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.services';

@Module({
  imports: [
    ImageModule,
    HttpModule
    ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {

}