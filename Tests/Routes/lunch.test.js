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


/************************ GET /lunch */

describe('GET /lunch', function () {

    test('works', async function () {
        const resp = await request(app).get('/lunch');
        expect(resp.body.items).toEqual([
            {
                name: 'Big Mac',
                is_combo_item: true,
                combo_item_number: '1',
                sizeable: false,
                type: 'Lunch',
                not_combo_able: false,
                imagesrc: '/images/Big-Mac.jpg'
            }
        ])
    });

    test("not found for no such lunch", async function () {
        const resp = await request(app).get(`/lunch/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});