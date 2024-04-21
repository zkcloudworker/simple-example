import { Cloud, zkCloudWorker } from "zkcloudworker";
import { ExampleWorker } from "./src/worker";

export async function zkcloudworker(cloud: Cloud): Promise<zkCloudWorker> {
  return new ExampleWorker(cloud);
}
