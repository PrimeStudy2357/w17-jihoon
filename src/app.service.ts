import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  /** 로깅 모듈 */
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    console.log('the application generated a message : Hello World!');
    this.logger.log('Hello World!');
    this.logger.debug('Hello World!');
    this.logger.error('Hello World!');
    this.logger.fatal('Hello World!');
    this.logger.verbose('Hello World!');
    this.logger.warn('Hello World!');

    return 'Hello World!';
  }
}
