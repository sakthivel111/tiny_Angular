import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tiny } from './tiny/entities/tiny.entity';
import { TinyModule } from './tiny/tiny.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tiny', 
      password: 'p41aRC4j7T&C', 
      database: 'tiny', 
      autoLoadEntities:true, 
      // type: 'mysql',
      // host:process.env.DATABASE_HOST,
      // port: 3306,
      // username:process.env.DATABASE_USER, 
      // password:process.env.DATABASE_PASSWORD, 
      // database:process.env.DATABASE_NAME, 
      entities: [
        Tiny
      ],
      synchronize:true,
     
    }),
    TinyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
