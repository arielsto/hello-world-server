function formatGreeting(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}!`;
}

module.exports = { formatGreeting };
