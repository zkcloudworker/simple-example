# Simple worker example

A simple example of a worker running a ZkProgram.

## Installation

You need to install `node (v20+)` and `git` and clone this repo in the same 
working dir where you installed the `zkcloudworker-local` repo.
```
git clone https://github.com/zkcloudworker/simple-example
```

## Deploy

In the `zkcloudworker-local` folder, run:
```
cd zkcloudworker-local
yarn deploy simple-example
```

See the 
[zkcloudworker-local](https://github.com/zkcloudworker/zkcloudworker-local) 
repo for more details. 

## Run

Import it, assuming it has been deployed to `workerPath`:
```
  const { zkcloudworker } = await import(workerPath);
```

Create the 'local' worker's context:
```
  const timeCreated = Date.now();
  const job: JobData = {
    id: "local",
    jobId: "jobId",
    developer: "@dfst",
    repo: "simple-example",
    task: "example",
    userId: "userId",
    args: Math.ceil(Math.random() * 100).toString(),
    metadata: "simple-example",
    txNumber: 1,
    timeCreated,
    timeCreatedString: new Date(timeCreated).toISOString(),
    timeStarted: timeCreated,
    jobStatus: "started",
    maxAttempts: 0,
  } as JobData;
  
  const cloud = new LocalCloud({ 
    job, 
    chain: "local", 
    localWorker: zkcloudworker
  }); 
```

Create the worker instance:
~~~
  const worker = await zkcloudworker(cloud);
~~~

And run the execute() method:
~~~
  const result = await worker.execute();
  console.log("Job result:", result);
~~~
