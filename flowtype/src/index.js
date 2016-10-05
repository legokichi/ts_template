/* @flow */

const $ = require("jquery");

export function runQunit() {
    QUnit.module('navigator');
    QUnit.test('navigator.getUserMedia', (assert) => {
        assert.ok(navigator.getUserMedia instanceof Function);
    });
    QUnit.test('navigator.mediaDevices.getUserMedia', (assert) => {
        assert.ok(navigator.mediaDevices.getUserMedia instanceof Function);
    });
}

$(runQunit);
