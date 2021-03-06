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
        expect(resp.body.items).toEqual([
            {
                name: 'Egg McMuffin',
                is_combo_item: true,
                combo_item_number: '1',
                sizeable: false,
                type: 'Breakfast',
                not_combo_able: false,
                imagesrc: '/images/eggMcMuffin.jpg'
            }
        ])
    });

    test("not found for no such breakfast", async function () {
        const resp = await request(app).get(`/breakfast/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});