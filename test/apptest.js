const request = require('supertest');
const assert = require('chai').assert;
let url = "https://jsonplaceholder.typicode.com";
let response;

describe('Code challengefor Senior QA engineers', function () {

    describe('GET Requests', function () {
         //Setting before execution
        before(function (done) {
            request(url)
                .get('/users')
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })


        it('Search for the user with username Delphine​', function (done) {
            let { id, name, username, email } = response.body[8];
            let result = { id, name, username, email };
            let object = {
                "id": 9,
                "name": "Glenna Reichert",
                "username": "Delphine",
                "email": "Chaim_McDermott@dana.io",
            };
    
            assert.deepEqual(result, object);
            done();
        });

        it('Successful Request, code status 200', function (done) {
            let result = response.statusCode;
            let test = 200;

            assert.deepEqual(result, test);
            done();

        })


        it('Checking if the Content Type is returned', function (done) {
            let result = response.header['content-type'];
            let test = "application/json; charset=utf-8";

            assert.deepEqual(result, test);
            done();
        })
    });


    describe('Testing POST Requests', function () {
        //Setting before execution
        before(function (done) {

            request(url)
                .post('/posts')
                .set('Accept', 'application/json')
                .send({
                    title: 'It´s a Post',
                    body: 'Here my body content',
                    userId: 11
                })
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })


        it('Successful Request, code status 201 created', function (done) {
            let result = response.statusCode;
            let test = 201;

            assert.deepEqual(result, test);
            done();

        })

        it('Checking the Content Type returned', function (done) {
            let result = response.header['content-type'];
            let test = "application/json; charset=utf-8";

            assert.deepEqual(result, test);
            done();
        })

    })

});