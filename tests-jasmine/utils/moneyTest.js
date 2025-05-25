import { format_currency } from "../../scripts/utils/money.js";

describe('test suite : formatCurrency',() => {
    it('converts cents into dollars',() => {
        expect(format_currency(2095)).toEqual('20.95');
    });
    it('Works with zero',() => {
        expect(format_currency(0)).toEqual('0.00');
    });
    it('Rounds upto nearest cent',() => {
        expect(format_currency(2000.5)).toEqual('20.01');
    });
});