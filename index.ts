import { Cloud, zkCloudWorker } from "zkcloudworker";
import { ExampleWorker } from "./src/worker";

export async function createWorker(cloud: Cloud): Promise<zkCloudWorker> {
  return new ExampleWorker(cloud);
}
