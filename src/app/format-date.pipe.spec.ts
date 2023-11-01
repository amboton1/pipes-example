import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;

  beforeEach(() => {
    pipe = new FormatDatePipe();
  });

  it('transforms "12-12-2012" to "December 12, 2012"', () => {
    const transformedValue = pipe.transform('12-12-2012');
    expect(transformedValue).toBe('December 12, 2012');
  });

  it('transforms "03-25-2021" to "March 25, 2021"', () => {
    const transformedValue = pipe.transform('03-25-2021');
    expect(transformedValue).toBe('March 25, 2021');
  });

  it('transforms an empty string to an empty string', () => {
    const transformedValue = pipe.transform('');
    expect(transformedValue).toBe('');
  });

  it('transforms an incomplete date "12-2022" to the original string', () => {
    const transformedValue = pipe.transform('12-2022');
    expect(transformedValue).toBe('12-2022');
  });

  it('transforms an invalid date "abc-abc-abc" to the original string', () => {
    const transformedValue = pipe.transform('abc-abc-abc');
    expect(transformedValue).toBe('abc-abc-abc');
  });
});
