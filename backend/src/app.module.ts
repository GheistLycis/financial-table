import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import * as Joi from "@hapi/joi";
import { loggerMiddleware } from './middlewares/logger';
import { YearModule } from './content/year/year.module';
import { MonthModule } from './content/month/month.module';
import { MonthlyEntryModule } from './content/monthly-entry/monthly-entry.module';
import { GroupModule } from './content/group/group.module';
import { CategoryModule } from './content/category/category.module';
import { ExpenseModule } from './content/expense/expense.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(5432),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      })
    }),
    YearModule, 
    MonthModule, 
    MonthlyEntryModule, 
    GroupModule, 
    CategoryModule, 
    ExpenseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(loggerMiddleware)
      .forRoutes('*')
  }
}
