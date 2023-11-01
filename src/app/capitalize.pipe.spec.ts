import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('transforms "test unit1" to "Test Unit1"', () => {
    const transformedValue = pipe.transform('test unit1');
    expect(transformedValue).toBe('Test Unit1');
  });

  it('transforms "test unit2" to "Test Unit2"', () => {
    const transformedValue = pipe.transform('test unit2');
    expect(transformedValue).toBe('Test Unit2');
  });

  it('transforms an empty string to an empty string', () => {
    const transformedValue = pipe.transform('');
    expect(transformedValue).toBe('');
  });

  it('transforms a single word "test" to "Test"', () => {
    const transformedValue = pipe.transform('test');
    expect(transformedValue).toBe('Test');
  });

  it('transforms a string with all uppercase letters "ALL CAPS" to "All Caps"', () => {
    const transformedValue = pipe.transform('ALL CAPS');
    expect(transformedValue).toBe('All Caps');
  });
});
