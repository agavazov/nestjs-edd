import { Module } from '@nestjs/common';
import { SenderService } from './common/services/sender.service';
import { UsersListener } from './listeners/users.listener';

@Module({
  imports: [],
  controllers: [],
  providers: [SenderService, UsersListener],
})
export class MailerModule {}
