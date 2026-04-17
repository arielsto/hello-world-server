const request = require('supertest');
const app = require('../src/app');

describe('HTTP routes (integration)', () => {
  test('GET / responds with Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, World!\n');
  });

  test('GET /health responds with status ok and uptime', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(typeof res.body.uptime).toBe('number');
  });

  test('GET /greet/:name responds with personalized greeting', async () => {
    const res = await request(app).get('/greet/Ariel');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, Ariel!\n');
  });

  test('GET /greet/<whitespace> responds with 400 and error message', async () => {
    const res = await request(app).get('/greet/%20');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('name must be a non-empty string');
  });

  test('GET /unknown-route responds with 404', async () => {
    const res = await request(app).get('/this-does-not-exist');
    expect(res.status).toBe(404);
  });
});
