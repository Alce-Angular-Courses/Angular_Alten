import { factorial } from "./factorial";

describe('Factorial', () => {

    it('partiendo de 1 debe dar 1', () => {
      expect(factorial(1)).toEqual(1);
    });

    it('partiendo de 5 debe dar 120', () => {
        expect(factorial(5)).toEqual(120);
      });

    it('partiendo de 0 debe dar 0', () => {
        expect(factorial(0)).toBeFalsy();
    });

    it('partiendo de -1 debe dar undefined', () => {
        expect(factorial(-1)).toBeUndefined();
    });

  });
