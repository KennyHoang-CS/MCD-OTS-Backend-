"use strict";

const request = require("supertest");

const app = require("../../app");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


/************************ GET /breakfast */

describe('GET /breakfast', function () {

    test('works', async function () {
        const resp = await request(app).get('/breakfast');
        console.log('RESP BODY => ', resp.body);
    });
});