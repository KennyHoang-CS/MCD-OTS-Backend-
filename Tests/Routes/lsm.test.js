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


/************************ GET /lsm */

describe('GET /lsm', function () {

    test('works', async function () {
        const resp = await request(app).get('/lsm');
        expect(resp.body.items).toEqual([
            {
                name: "Classic Pack Big Mac",
                sizeable: false,
                imagesrc: "/images/classic-pack-big-mac.jpg"
            }
        ])
    });

    test("not found for no such lsm", async function () {
        const resp = await request(app).get(`/lsm/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});