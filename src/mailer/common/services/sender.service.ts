import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SenderService {
  constructor(private eventEmitter: EventEmitter2) {}

  async welcomeMail(email, name): Promise<void> {
    // Send the mail here
    console.log(`~~MAILER.WELCOME~~ Send welcome mail to "${email} <${name}>"`);

    // Trigger event (in this demo the stats service will log it)
    this.eventEmitter.emit('mailer.welcome', { email });
  }
}
