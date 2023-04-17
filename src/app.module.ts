import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { ClientModule } from './client/client.module';
import { MailerModule } from './mailer/mailer.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    ClientModule,
    UsersModule,
    MailerModule,
    StatsModule,

    // Configure Event Emitter Module (used for EDD)
    EventEmitterModule.forRoot({
      // Wildcards * in listeners e.g. users.*
      wildcard: true,
      // Delimiter for the namespaces in events e.g. users.registration
      delimiter: '.',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
