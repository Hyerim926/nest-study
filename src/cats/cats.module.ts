import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],//기본적으로 provider는 캡슐화가 되어 다른 곳에서 사용 불가
  exports: [CatsService],// export를 해야 다른 곳에서 사용(imports로 사용)이 가능하다 (캡슐화 풀기)
})
export class CatsModule {}
