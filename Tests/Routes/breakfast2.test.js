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


/************************ GET /breakfast-2 */

describe('GET /breakfast-2', function () {

    test('works', async function () {
        const resp = await request(app).get('/breakfast-2');
        expect(resp.body.items).toEqual([
            {
                name: "Saus Biscuit",
                is_combo_item: true,
                combo_item_number: "999",
                sizeable: false,
                type: "Breakfast",
                not_combo_able: false,
                imagesrc: "/images/sausBis.jpg"
            }
        ])
    });

    test("not found for no such breakfast", async function () {
        const resp = await request(app).get(`/breakfast-2/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});