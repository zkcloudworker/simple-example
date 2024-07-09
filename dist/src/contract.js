"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleZkApp = void 0;
const o1js_1 = require("o1js");
exports.ExampleZkApp = (0, o1js_1.ZkProgram)({
    name: "zk-app",
    methods: {
        check: {
            privateInputs: [o1js_1.Field],
            async method(value) {
                value.assertLessThanOrEqual((0, o1js_1.Field)(100));
            },
        },
    },
});
