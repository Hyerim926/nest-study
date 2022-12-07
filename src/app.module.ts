import { CatsService } from './cats/cats.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [CatsModule],// nest g mo cats명령어로 파일 생성하면 자동으로 imports됨
  controllers: [AppController],//소비자
  providers: [AppService],//공급자 등록해주기 (사업자 등록) -> service에서 injectable()사용이 가능함
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');// cats엔드포인트에 맵핑 '*'는 모든 라우터
  }
}
