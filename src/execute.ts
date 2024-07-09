import { zkCloudWorkerClient } from "zkcloudworker";
import { JWT } from "../env.json";

async function main() {
  console.log(
    `zkCloudWorker Simple Example (c) DFST 2024 www.zkcloudworker.com\n`
  );
  if (JWT === undefined) {
    throw new Error(
      "JWT is undefined, please provide a valid JWT in env.json file."
    );
  }
  const api = new zkCloudWorkerClient({
    jwt: JWT,
  });

  const response = await api.execute({
    developer: "DFST",
    repo: "simple-example",
    transactions: [],
    task: "generate-proof",
    args: "50",
    metadata: `proof generation`,
    mode: "async",
  });

  console.log("API response:", response);
  const jobId = response?.jobId;
  if (jobId === undefined) {
    throw new Error("Job ID is undefined");
  }

  const result = await api.waitForJobResult({ jobId, printLogs: true });
  console.log("Job result:", result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
