import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SenderService } from '../common/services/sender.service';

@Injectable()
export class UsersListener {
  constructor(private sender: SenderService) {}

  @OnEvent('user.registration')
  async handleRegistration(eventData) {
    await this.sender.welcomeMail(eventData.email, eventData.name);
  }
}
