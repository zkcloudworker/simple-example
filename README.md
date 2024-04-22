# Simple worker example

A simple example of a worker running a ZkProgram.

## Installation

You need to install `node (v20+)` and `git` and clone this repo in the same 
working dir where you installed the `zkcloudworker-local` repo.
For this examples we assume the working dir is `~/zkcloudworker`.
```
cd ~/zkcloudworker
git clone https://github.com/zkcloudworker/simple-example
```

## Deploy

In the `zkcloudworker-local` folder, run:
```
cd ~/zkcloudworker
cd zkcloudworker-local
yarn deploy simple-example
```

See the 
[zkcloudworker-local](https://github.com/zkcloudworker/zkcloudworker-local) 
repo for more details. 

## Run

In the `zkcloudworker-local` folder, run:
```
cd ~/zkcloudworker
cd zkcloudworker-local
yarn start simple-example
```
