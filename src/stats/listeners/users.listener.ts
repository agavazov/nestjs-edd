import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { colors } from 'colors.ts';

@Injectable()
export class UsersListener {
  @OnEvent('users.reg')
  async handleAllUsers(eventData: any) {
    console.log(
      colors('yellow', `\n[stats.listen] for {users.reg}\n${JSON.stringify(eventData, null, 2)}\n`)
    );
  }
}
