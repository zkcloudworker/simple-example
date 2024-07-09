# Simple worker example

A simple example of a worker running a ZkProgram.

## Installation

You need to install `node (v20+)` and `git` and clone this repo

```
git clone https://github.com/zkcloudworker/simple-example
cd simple-example
```

## Deploy

Install zkCloudWorker CLI tool

```sh
npm install -g zkcloudworker-cli
```

Get the JWT key at https://minarollupscan.com/jwt and write it to the config:

```sh
zkcw config --jwt eyJhbGciOiJIUz.... (replace with your JWT key)
```

Deploy this repo to the zkCloudWorker cloud (increase the version number in package.json before each deployment)

```sh
zkcw deploy
```

or, in verbose mode

```sh
zkcw deploy -v
```

## Run proof creation

Run:

```sh
yarn start
```
