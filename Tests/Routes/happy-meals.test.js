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


/************************ GET /happy-meal */

describe('GET /happy-meal', function () {

    test('works', async function () {
        const resp = await request(app).get('/happy-meal');
        expect(resp.body.items).toEqual([
            {
                name: "HM Hambrg",
                sizeable: false,
                imagesrc: "/images/h-mcdonalds-Hamburger.jpg"
            }
        ])
    });

    test("not found for no such happy meals", async function () {
        const resp = await request(app).get(`/happy-meal/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});