import MinioClient from './MinioClient.js';

const minioClient = MinioClient();

(async () => {
  console.log(`Listing all buckets:`);
  const bucketsList = await minioClient.listBuckets();
  if (bucketsList.length) {
    console.log(
        `${bucketsList.map((bucket) => bucket.name).join(", ")}`
    );
  } else {
    console.log("No buckets found.")
  }
})();
