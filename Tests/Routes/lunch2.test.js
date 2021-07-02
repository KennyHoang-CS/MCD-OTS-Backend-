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


/************************ GET /lunch-2 */

describe('GET /lunch-2', function () {

    test('works', async function () {
        const resp = await request(app).get('/lunch-2');
        expect(resp.body.items).toEqual([
            {
                name: "4 Nuggets",
                is_combo_item: false,
                combo_item_number: '999',
                sizeable: false,
                type: 'Lunch',
                not_combo_able: true,
                imagesrc: '/images/Chicken-McNuggets.jpg'
            }
        ])
    });

    test("not found for no such lunch 2", async function () {
        const resp = await request(app).get(`/lunch-2/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});