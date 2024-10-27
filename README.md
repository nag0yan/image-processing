# Image Processing Architecture Sample
This is serverless image processing architecture sample.

## Architeture
```mermaid
graph LR;
  Image((Image))-->|S3 event|S3_1[S3]-->|Queuing|SQS-->|Processing|Lambda-->|Output|S3_2[S3]
```
