import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { colors } from 'colors.ts';

@Injectable()
export class MailerListener {
  @OnEvent('mailer.*')
  async handleAllUsers(eventData: any) {
    console.log(
      colors('yellow', `\n[stats.listen] for {mailer.*}\n${JSON.stringify(eventData, null, 2)}\n`)
    );
  }
}
