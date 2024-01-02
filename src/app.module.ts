import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { ServiceRequestsModule } from './service-requests/service-requests.module';

@Module({
  imports: [UserModule, ServiceRequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
