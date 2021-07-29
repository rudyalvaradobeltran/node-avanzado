const request = require('supertest');
const app = require('../app');

describe('Ruta inicial', () => {
  test('Debe devolver una respuesta por get', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('No debe devolver una respuesta por post', (done) => {
    request(app).post('/').then((response) => {
      expect(response.statusCode).toBe(404);
      expect(response.statusCode).not.toBe(200);
      done();
    });
  });
  test('Debe mostrar bienvenido', (done) => {
    request(app).post('/bienvenido').then((response) => {
      expect(response.text).toMatch(/Bienvenido/);
      done();
    });
  });
});