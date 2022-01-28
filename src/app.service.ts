import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<p>Dev: Agnieszka Jankowy</p>
    <p>Contact me: a.jankowy035@gmail.com</p>`;
  }
}
