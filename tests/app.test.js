const request = require('supertest');
const app = require('../server/app');

describe('Compute Portal Website', () => {
  describe('GET /', () => {
    it('should return 200 and serve the home page', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.type).toContain('text/html');
    });
  });

  describe('GET /about', () => {
    it('should return 200 and serve the about page', async () => {
      const response = await request(app).get('/about');
      expect(response.status).toBe(200);
      expect(response.type).toContain('text/html');
    });
  });

  describe('GET /contact', () => {
    it('should return 200 and serve the contact page', async () => {
      const response = await request(app).get('/contact');
      expect(response.status).toBe(200);
      expect(response.type).toContain('text/html');
    });
  });

  describe('GET /api/health', () => {
    it('should return 200 and health status', async () => {
      const response = await request(app).get('/api/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body).toHaveProperty('environment');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent');
      expect(response.status).toBe(404);
    });
  });

  describe('Static files', () => {
    it('should serve CSS files', async () => {
      const response = await request(app).get('/styles/main.css');
      expect(response.status).toBe(200);
      expect(response.type).toContain('text/css');
    });

    it('should serve JavaScript files', async () => {
      const response = await request(app).get('/scripts/main.js');
      expect(response.status).toBe(200);
      expect(response.type).toContain('application/javascript');
    });

    it('should serve logo files', async () => {
      const response = await request(app).get('/logo/PNG/Compute%20portal%20-%20Brand%20Guidelines_Wordmark%20-%20black.png');
      expect(response.status).toBe(200);
      expect(response.type).toContain('image/png');
    });
  });

  describe('Security headers', () => {
    it('should include security headers', async () => {
      const response = await request(app).get('/');
      expect(response.headers).toHaveProperty('x-frame-options');
      expect(response.headers).toHaveProperty('x-content-type-options');
      expect(response.headers).toHaveProperty('x-xss-protection');
    });
  });
}); 