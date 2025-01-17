import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateSiteInfoDto } from 'src/dto/site.dto';
import { AdminGuard } from 'src/provider/auth/auth.guard';
import { ISRProvider } from 'src/provider/isr/isr.provider';
import { MetaProvider } from 'src/provider/meta/meta.provider';
@ApiTags('site')
@UseGuards(AdminGuard)
@Controller('/api/admin/meta/site')
export class SiteMetaController {
  constructor(
    private readonly metaProvider: MetaProvider,
    private readonly isrProvider: ISRProvider,
  ) {}

  @Get()
  async get() {
    const data = await this.metaProvider.getSiteInfo();
    return {
      statusCode: 200,
      data,
    };
  }

  @Put()
  async update(@Body() updateDto: UpdateSiteInfoDto) {
    const data = await this.metaProvider.updateSiteInfo(updateDto);
    this.isrProvider.activeAll('更新站点配置触发增量渲染！');
    return {
      statusCode: 200,
      data,
    };
  }
}
