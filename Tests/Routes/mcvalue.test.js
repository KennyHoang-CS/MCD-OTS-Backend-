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


/************************ GET /mcvalue */

describe('GET /mcvalue', function () {

    test('works', async function () {
        const resp = await request(app).get('/mcvalue');
        expect(resp.body.items).toEqual([
            {
                name: "McChicken",
                is_combo_item: false,
                combo_item_number: '999',
                sizeable: false,
                type: 'Lunch',
                not_combo_able: true,
                imagesrc: '/images/McChicken.jpg'
            }
        ])
    });

    test("not found for no such mcvalue", async function () {
        const resp = await request(app).get(`/mcvalue/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});