import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { colors } from 'colors.ts';

@Injectable()
export class SenderService {
  constructor(private eventEmitter: EventEmitter2) {}

  async welcomeMail(email: string, name: string): Promise<void> {
    // Send the mail here
    console.log(colors('red', `\n[mailer.emit] mailer.welcome\n "Welcome ${email} <${name}>"\n`));

    // Trigger event (in this demo the stats service will log it)
    this.eventEmitter.emit('mailer.welcome', { email });
  }
}
