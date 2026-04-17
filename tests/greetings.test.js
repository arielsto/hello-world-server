const { formatGreeting } = require('../src/greetings');

describe('formatGreeting (unit)', () => {
  test('returns greeting for a normal name', () => {
    expect(formatGreeting('Ariel')).toBe('Hello, Ariel!');
  });

  test('trims surrounding whitespace', () => {
    expect(formatGreeting('  Ariel  ')).toBe('Hello, Ariel!');
  });

  test('throws on empty string', () => {
    expect(() => formatGreeting('')).toThrow('name must be a non-empty string');
  });

  test('throws on whitespace-only string', () => {
    expect(() => formatGreeting('   ')).toThrow('name must be a non-empty string');
  });

  test('throws on non-string input', () => {
    expect(() => formatGreeting(42)).toThrow('name must be a non-empty string');
    expect(() => formatGreeting(null)).toThrow('name must be a non-empty string');
    expect(() => formatGreeting(undefined)).toThrow('name must be a non-empty string');
  });
});
