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


/************************ GET /drinks */

describe('GET /drinks', function () {

    test('works', async function () {
        const resp = await request(app).get('/drinks');
        expect(resp.body.items).toEqual([
            {
                name: "Coke",
                sizeable: true,
                imagesrc: "/images/coke.png"
            }
        ])
    });

    test("not found for no such drinks", async function () {
        const resp = await request(app).get(`/drinks/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});