# Image Processing Architecture Sample
This is a serverless image processing architecture sample.

## Architeture
```mermaid
graph LR;
  Image((Image))-->|S3 event|S3_1[S3]-->|Queuing|SQS-->|Processing|Lambda-->|Output|S3_2[S3]
```

## Setup
Install dependencies
```bash
npm install
```
Build assets
```bash
npm run build
```

## Tool
Test function
```bash
npm run testf
```
Update Snapshot
```bash
npm run testu
```
Precommit
```bash
npm run pc
```
