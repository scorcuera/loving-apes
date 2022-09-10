import request from 'supertest';
import app from '../app';

describe('Images API', () => {
    test('GET /images should run an array of all the images', async () => {
        return request(app)
            .get('/api/images')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                console.log(response.body);
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            url: expect.any(String)
                        })
                    ])
                )
            })
    });
    test('GET /images/id should return a specific image by ID', async () => {
        return request(app)
            .get('/api/images/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name: expect.any(String),
                            url: expect.any(String)
                        })
                    ])
                )
            })
    });
    test('GET /images/id should return a 404 if not found', async () => {
        return request(app)
            .get('/api/pokemons/999999')
            .expect(404)
    });
    test('POST /images should return a newly created image', async () => {
        return request(app)
            .post('/api/images')
            .send({
                name: 'gorilla',
                url: 'gorilla.jpg'
            })
            .expect('Content-Type', /json|text\/html/)
            .expect(201)
            .then(response => {
                expect(response.body).toEqual(
                        expect.objectContaining({
                            name: 'gorilla',
                            url: 'gorilla.jpg'
                        })
                )
            })
    });
    test('PUT /images/id should modify a specific image', async () => {
        return request(app)
            .put('/api/images/2')
            .send({
                name: 'gorilla',
                url: 'gorilla.jpeg'
            })
            .expect('Content-Type', /json|text\/html/)
            .expect(200)
            .then(response => {
                console.log(response.body);
                expect(response.body).toEqual(
                        expect.objectContaining({
                            name: 'gorilla',
                            url: 'gorilla.jpeg'
                        })
                )
            })
    });
});
