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


/************************ GET /dessert */

describe('GET /dessert', function () {

    test('works', async function () {
        const resp = await request(app).get('/dessert');
        expect(resp.body.items).toEqual([
            {
                name: "Apple Pie",
                sizeable: false,
                imagesrc: "/images/apple-pie.jpg"
            }
        ])
    });

    test("not found for no such dessert", async function () {
        const resp = await request(app).get(`/dessert/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});