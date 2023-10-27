import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { colors } from 'colors.ts';

@Injectable()
export class RegistrationService {
  constructor(private eventEmitter: EventEmitter2) {}

  async create(user: User): Promise<User> {
    console.log(
      colors('blue', `\n[users.request] {registration}\n${JSON.stringify(user, null, 2)}\n`)
    );

    user.id = Math.random().toString(36).substring(2, 10);
    user.regDate = JSON.stringify(new Date());

    console.log(colors('blue', `\n[users.emit] {users.reg}\n${JSON.stringify(user, null, 2)}\n`));

    // Emit the event to all listeners (user.* or user.registration)
    // Better to use an interface or model when passing the data, but for a clean demo we will use an object
    this.eventEmitter.emit('users.reg', user);

    // Return
    return user;
  }
}
