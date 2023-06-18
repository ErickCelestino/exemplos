import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CalculadoraModule } from './calculadora/calculadora.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.dev.env', '.product.env'] }),
    CalculadoraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
