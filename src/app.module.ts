import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MySQLDatabaseProviderModule } from './providers/database/mysql/provider.module';
import { UserModule } from './modules/users/user.module';
import { AppConfigModule } from './config/app/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    AppConfigModule,
    MySQLDatabaseProviderModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
