import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraService],
    }).compile();

    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('teste a função somar', () => {
    const somar = service.somar({ numerador: 3, denominador: 4 });
    expect(somar).toBe(7);
  });

  it('teste a função subtrair', () => {
    const subtrair = service.subtrair({ numerador: 3, denominador: 4 });
    expect(subtrair).toBe(-1);
  });

  it('teste a função multiplicar', () => {
    const multiplicar = service.multiplicar({ numerador: 3, denominador: 4 });
    expect(multiplicar).toBe(12);
  });

  it('teste a função dividir', () => {
    const dividir = service.dividir({ numerador: 3, denominador: 4 });
    expect(dividir).toBe(0.75);
  });
});
