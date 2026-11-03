import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'YOUR_PASSWORD',
      database: 'faculty_management',
      autoLoadEntities: true,
      synchronize: true, // dev only: auto-creates the "faculties" table
    }),
    FacultiesModule,
  ],
})
export class AppModule {}