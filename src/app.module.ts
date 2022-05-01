import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { QueueModule } from './queue/queue.module';
import { EventsModule } from './events/events.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    ProductModule,
    DatabaseModule,
    QueueModule,
    EventsModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({ load: [config] }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
