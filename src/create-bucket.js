import MinioClient from './MinioClient.js';
import { downloadOnlyPolicy } from '../data/download-only-policy.js';

const minioClient = MinioClient();

const bucketName = "minio-guide";

(async () => {
  console.log(`Creating bucket: ${bucketName}`);
  await minioClient.makeBucket(bucketName).catch((e) => {
    console.log(`Error while creating bucket '${bucketName}': ${e.message}`);
  });

  console.log("Bucket successfully created!");

  await minioClient.setBucketPolicy(bucketName, JSON.stringify(downloadOnlyPolicy)).catch((e) => {
    console.log(`Error while setting policy for '${bucketName}': ${e.message}`);
  });

  console.log('Bucket policy set to download only.')

})();
