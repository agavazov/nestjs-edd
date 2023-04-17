import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UsersListener {
  @OnEvent('user.*')
  async handleAllUsers(eventData) {
    console.log(`~~STATS.USERS.*~~ ${JSON.stringify(eventData)}`);
  }
}
