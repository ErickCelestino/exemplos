import { IsNumber } from 'class-validator';
export class CalculadoraDto {
  @IsNumber()
  numerador: number;
  @IsNumber()
  denominador: number;
}
