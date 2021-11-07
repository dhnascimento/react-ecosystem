import { expect  } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe('getBorderStyleForDate', () => {
    it('returns none when the date is less than five days ago', () => {
        const today = Date.now();
        const recenteDate = new Date(Date.now() - 86400000 * 3);

        const expected = 'none;';
        const actual = getBorderStyleForDate(recenteDate, today);

        expect(actual).to.equal(expected);
    });

    it('returns a border when the date is more than five days ago', () => {
        const today = Date.now();
        const recenteDate = new Date(Date.now() - 86400000 * 7);

        const expected = '2px solid red;';
        const actual = getBorderStyleForDate(recenteDate, today);

        expect(actual).to.equal(expected);
    })
})