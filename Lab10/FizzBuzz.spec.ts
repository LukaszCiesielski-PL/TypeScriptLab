import { beforeEach, expect, it } from '@jest/globals';
import {FizzBuzz} from './FizzBuzz';

describe('Fizz', () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(()=>{
            fizzBuzz = new FizzBuzz();
    });

    it('Fizz', ()=>{
        let game = fizzBuzz.Check(3);
        expect(game).toBe('Fizz');
    });
    it('Buzz', ()=>{
        let game = fizzBuzz.Check(5);
        expect(game).toBe('Buzz');
    });
    it('Fizz Buzz', ()=>{
        let game = fizzBuzz.Check(30);
        expect(game).toBe('Fizz Buzz');
    });
    it('number', ()=>{
        let game = fizzBuzz.Check(22);
        expect(game).toBe('22');
    });
    
    it('test', ()=>{
        let game = fizzBuzz.Play();
        expect(game[0]).toBe('1');
        expect(game[5]).toBe('Fizz');
        expect(game[9]).toBe('Buzz');
        expect(game[14]).toBe('Fizz Buzz');
        expect(game[21]).toBe('22');
    });
   



});