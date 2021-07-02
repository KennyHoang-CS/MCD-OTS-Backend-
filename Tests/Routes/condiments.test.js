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


/************************ GET /condiments */

describe('GET /condiments', function () {

    test('works', async function () {
        const resp = await request(app).get('/condiments');
        expect(resp.body.items).toEqual([
            {
                name: "BBQ",
                sizeable: false,
                imagesrc: "/images/bbq-sauce.jpg"
            }
        ])
    });

    test("not found for no such condiments", async function () {
        const resp = await request(app).get(`/condiments/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});