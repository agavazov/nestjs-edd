import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class RegistrationService {
  constructor(private eventEmitter: EventEmitter2) {}

  async create(user: User): Promise<User> {
    console.log(`\n\n\n**USER.REG** Create new user "${user.email}"`);

    user.id = Math.random().toString(36).substring(2, 10);
    user.regDate = JSON.stringify(new Date());

    // Emit the event to all listeners (user.* or user.registration)
    // Better to use an interface or model when passing the data, but for a clean demo we will use an object
    this.eventEmitter.emit('user.registration', user);

    // Return
    return user;
  }
}
