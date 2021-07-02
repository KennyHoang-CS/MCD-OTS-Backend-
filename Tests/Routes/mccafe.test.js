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


/************************ GET /mccafe */

describe('GET /mccafe', function () {

    test('works', async function () {
        const resp = await request(app).get('/mccafe');
        expect(resp.body.items).toEqual([
            {
                name: "Crml Machi",
                sizeable: true,
                imagesrc: "/images/t-mcdonalds-caramel-macchiato.jpg"
            }
        ])
    });

    test("not found for no such mccafe", async function () {
        const resp = await request(app).get(`/mccafe/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});