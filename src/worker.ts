import { zkCloudWorker, Cloud } from "zkcloudworker";
import { verify, Field, Cache } from "o1js";

import { ExampleZkApp } from "./contract";

export class ExampleWorker extends zkCloudWorker {
  constructor(cloud: Cloud) {
    super(cloud);
  }

  public async execute(): Promise<string | undefined> {
    if (this.cloud.args === undefined) throw new Error("args is undefined");
    const value = parseInt(this.cloud.args);
    console.log(`Generating the proof for value ${value}`);
    const vk = (
      await ExampleZkApp.compile({ cache: Cache.FileSystem(this.cloud.cache) })
    ).verificationKey;
    const proof = await ExampleZkApp.check(Field(value));
    const verified = await verify(proof, vk);
    console.log(`Verification result: ${verified}`);
    return JSON.stringify(proof.toJSON(), null, 2);
  }
}
