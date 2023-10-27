import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SenderService } from '../common/services/sender.service';
import { colors } from 'colors.ts';

@Injectable()
export class UsersListener {
  constructor(private sender: SenderService) {}

  @OnEvent('users.reg')
  async handleRegistration(eventData: any) {
    console.log(
      colors('red', `\n[mailer.listen] {users.reg}\n${JSON.stringify(eventData, null, 2)}\n`)
    );
    await this.sender.welcomeMail(eventData.name, eventData.email);
  }
}
