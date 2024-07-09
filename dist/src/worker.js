"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleWorker = void 0;
const zkcloudworker_1 = require("zkcloudworker");
const o1js_1 = require("o1js");
const contract_1 = require("./contract");
class ExampleWorker extends zkcloudworker_1.zkCloudWorker {
    constructor(cloud) {
        super(cloud);
    }
    async execute() {
        if (this.cloud.args === undefined)
            throw new Error("args is undefined");
        const value = parseInt(this.cloud.args);
        console.log(`Generating the proof for value ${value}`);
        const vk = (await contract_1.ExampleZkApp.compile()).verificationKey;
        const proof = await contract_1.ExampleZkApp.check((0, o1js_1.Field)(value));
        const verified = await (0, o1js_1.verify)(proof, vk);
        console.log(`Verification result: ${verified}`);
        return JSON.stringify(proof.toJSON(), null, 2);
    }
}
exports.ExampleWorker = ExampleWorker;
