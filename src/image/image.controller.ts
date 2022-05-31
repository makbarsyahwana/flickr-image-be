import { Controller, Get } from '@nestjs/common';
import { ImageService } from './image.services';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getHello(): any {
    return this.imageService.getImage();
  }
}