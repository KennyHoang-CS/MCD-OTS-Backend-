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


/************************ GET /salad */

describe('GET /salad', function () {

    test('works', async function () {
        const resp = await request(app).get('/salad');
        expect(resp.body.items).toEqual([
            {
                name: "Ranch Salad",
                is_combo_item: false,
                combo_item_number: '999',
                sizeable: false,
                type: 'Lunch',
                not_combo_able: true,
                imagesrc: '/images/ranch-salad.jpg'
            }
        ])
    });

    test("not found for no such salad", async function () {
        const resp = await request(app).get(`/salad/nope`);
        expect(resp.statusCode).toEqual(404);
    });
});