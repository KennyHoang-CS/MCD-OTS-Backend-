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


/************************ GET /dessert-2 */

describe('GET /dessert-2', function () {

    test('works', async function () {
        const resp = await request(app).get('/dessert-2');
        expect(resp.body.items).toEqual([
            {
                name: "Blubry Mfn",
                sizeable: false,
                imagesrc: "/images/blueberry-muffin.jpg"
            }
        ])
    });

    test("not found for no such dessert 2", async function () {
        const resp = await request(app).get(`/dessert-2/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});