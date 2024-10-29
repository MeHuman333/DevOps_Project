const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
afterAll(async () => {
    await mongoose.disconnect(); // Disconnect mongoose
    server.close(); // Close the server
});

// Set up environment variables for the test
process.env.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb';

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', password: 'password' });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId');
  });
});

