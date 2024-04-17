import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DBConnectConfigModule } from './shared/modules/database-connect.module';
import { JwtGuardConfig } from './shared/config/guards/jwt-guards.config';

@Module({
  imports: [DBConnectConfigModule, AuthModule, UserModule],
  providers: [JwtGuardConfig],
})
export class AppModule {}
