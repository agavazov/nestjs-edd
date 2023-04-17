import { Module } from '@nestjs/common';
import { UsersListener } from './listeners/users.listener';
import { MailerListener } from './listeners/mailer.listener';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersListener, MailerListener],
})
export class StatsModule {}
