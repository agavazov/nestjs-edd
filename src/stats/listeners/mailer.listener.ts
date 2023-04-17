import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class MailerListener {
  @OnEvent('mailer.*')
  async handleAllUsers(eventData) {
    console.log(`~~STATS.MAILER.*~~ ${JSON.stringify(eventData)}`);
  }
}
