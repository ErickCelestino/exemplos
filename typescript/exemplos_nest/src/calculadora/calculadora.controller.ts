import { Body, Controller, Post } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraDto } from './dtos/calculadoraDto';

@Controller('calculadora')
export class CalculadoraController {
  constructor(readonly calculadoraService: CalculadoraService) {}

  @Post('somar')
  somar(@Body() calculadoraDto: CalculadoraDto) {
    return this.calculadoraService.somar(calculadoraDto);
  }

  @Post('subtrair')
  subtrair(@Body() calculadoraDto: CalculadoraDto) {
    return this.calculadoraService.subtrair(calculadoraDto);
  }

  @Post('multiplicar')
  multiplicar(@Body() calculadoraDto: CalculadoraDto) {
    return this.calculadoraService.multiplicar(calculadoraDto);
  }

  @Post('dividir')
  dividir(@Body() calculadoraDto: CalculadoraDto) {
    return this.calculadoraService.dividir(calculadoraDto);
  }
}
