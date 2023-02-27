# Northflank MinIO API example

<a target="_blank" rel="noopener noreferrer" href="https://www.northflank.com">
    <img alt="Northflank" align="right" src="/media/logo.svg" width="35%" />
</a>

This repository contains examples of using the MinIO JavaScript client to access and use a Northflank MinIO addon. You can explore this repository while [following the guide here](https://northflank.com/guides/use-a-minio-s3-bucket-on-northflank).

Learn more:

- [Read more guides for MinIO on Northflank](https://northflank.com/guides?search=minio).
- [Read the docs for deploying MinIO on Northflank](https://northflank.com/docs/v1/application/databases-and-persistence/deploy-databases-on-northflank/deploy-minio-on-northflank).
- [Read the docs for migrating MinIO or S3-compatible storage to Northflank](https://northflank.com/docs/v1/application/databases-and-persistence/migrate-data-to-northflank/migrate-your-minio-deployment-to-northflank).

## Quick start 🚀

This example requires [Node.js](https://nodejs.org/) to run.

1. [Create a MinIO addon on Northflank](https://app.northflank.com/s/project/create/addon), and make it `publicly accessible` in the networking section.
2. Download or clone this repository locally and run `npm install`.
3. Copy: `NF_MINIO_HOST`, `NF_MINIO_ACCESS_KEY` and `NF_MINIO_SECRET_KEY` to a `.env` file, as per `.env.example`.
4. Run the following commands to execute examples:
- `npm run list-buckets`: connect to the MinIO instance and list all buckets

- `npm run create-bucket`: create a bucket on the MinIO instance

- `npm run upload-object`: upload an object from a file to the bucket

- `npm run read-object`: read an object from the bucket and write it to a file

- `npm run high-entropy-key`: upload an object with a high-entropy name and retrieve it
