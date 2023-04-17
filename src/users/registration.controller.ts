import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';

@Controller('/users/registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async create(@Body() data): ReturnType<RegistrationService['create']> {
    return await this.registrationService.create(data);
  }
}
