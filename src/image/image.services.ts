import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { firstValueFrom, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ImageService {
    constructor(private httpService: HttpService) {}

    getImage(): Observable<AxiosResponse<any >> {
        return this.httpService.get(
            'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
        ).pipe(
            map(response => response.data.items)
        )
    }
}