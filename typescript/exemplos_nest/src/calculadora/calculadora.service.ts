import { Injectable } from '@nestjs/common';
import { CalculadoraDto } from './dtos/calculadoraDto';

@Injectable()
export class CalculadoraService {
  somar(calculadoraDto: CalculadoraDto) {
    return calculadoraDto.numerador + calculadoraDto.denominador;
  }

  subtrair(calculadoraDto: CalculadoraDto) {
    return calculadoraDto.numerador - calculadoraDto.denominador;
  }

  multiplicar(calculadoraDto: CalculadoraDto) {
    return calculadoraDto.numerador * calculadoraDto.denominador;
  }

  dividir(calculadoraDto: CalculadoraDto) {
    return calculadoraDto.numerador / calculadoraDto.denominador;
  }
}
