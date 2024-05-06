import { zkCloudWorkerClient } from "zkcloudworker";

async function main() {
  console.log(
    `zkCloudWorker Simple Example (c) DFST 2024 www.zkcloudworker.com\n`
  );
  const JWT =
    process.env.JWT ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTkwMzQ5NDYiLCJpYXQiOjE3MDEzNTY5NzEsImV4cCI6MTczMjg5Mjk3MX0.r94tKntDvLpPJT2zzEe7HMUcOAQYQu3zWNuyFFiChD0";

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

  const result = await api.waitForJobResult({ jobId });
  console.log("Job result:", result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
