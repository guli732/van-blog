import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { SearchStaticOption } from 'src/dto/setting.dto';
import { AdminGuard } from 'src/provider/auth/auth.guard';
import { StaticProvider } from 'src/provider/static/static.provider';

@ApiTags('img')
@UseGuards(AdminGuard)
@Controller('/api/admin/img')
export class ImgController {
  constructor(private readonly staticProvider: StaticProvider) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: any, @Query('favicon') favicon: string) {
    let isFavicon = false;
    if (favicon && favicon == 'true') {
      isFavicon = true;
    }
    const res = await this.staticProvider.upload(file, 'img', isFavicon);
    return {
      statusCode: 200,
      data: res,
    };
  }

  @Get('all')
  async getAll() {
    const res = await this.staticProvider.getAll('img', 'public');
    return {
      statusCode: 200,
      data: res,
    };
  }
  @Post('scan')
  async scanImgsOfArticles() {
    const res = await this.staticProvider.scanLinksOfArticles();
    return {
      statusCode: 200,
      data: res,
    };
  }

  @Delete('/all/delete')
  async deleteALL() {
    const res = await this.staticProvider.deleteAllIMG();
    return {
      statusCode: 200,
      data: res,
    };
  }
  @Delete('/:sign')
  async delete(@Param('sign') sign: string) {
    const res = await this.staticProvider.deleteOneBySign(sign);
    return {
      statusCode: 200,
      data: res,
    };
  }
  @Get('')
  async getByOption(
    @Query('page') page: number,
    @Query('pageSize') pageSize = 5,
  ) {
    const option: SearchStaticOption = {
      page,
      pageSize,
      staticType: 'img',
      view: 'public',
    };
    const data = await this.staticProvider.getByOption(option);
    return {
      statusCode: 200,
      data,
    };
  }
}
