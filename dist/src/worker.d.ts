import { zkCloudWorker, Cloud } from "zkcloudworker";
export declare class ExampleWorker extends zkCloudWorker {
    constructor(cloud: Cloud);
    execute(): Promise<string | undefined>;
}
