import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YearController } from './controllers/year/year.controller';
import { YearService } from './services/year/year.service';
import { MonthController } from './controllers/month/month.controller';
import { MonthService } from './services/month/month.service';
import { CategoryController } from './controllers/category/category.controller';
import { CategoryService } from './services/category/category.service';
import { GroupController } from './controllers/group/group.controller';
import { GroupService } from './services/group/group.service';
import { ExpenseService } from './services/expense/expense.service';
import { ExpenseController } from './controllers/expense/expense.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    YearController,
    MonthController,
    CategoryController,
    GroupController,
    ExpenseController,
  ],
  providers: [
    AppService,
    YearService,
    MonthService,
    CategoryService,
    GroupService,
    ExpenseService,
  ],
})
export class AppModule {}
