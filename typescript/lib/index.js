"use strict";
var $ = require("jquery");
function runQunit() {
    QUnit.module('navigator');
    QUnit.test('navigator.getUserMedia', function (assert) {
        assert.ok(navigator.getUserMedia instanceof Function);
    });
    QUnit.test('navigator.mediaDevices.getUserMedia', function (assert) {
        assert.ok(navigator.mediaDevices.getUserMedia instanceof Function);
    });
}
exports.runQunit = runQunit;
$(runQunit);
