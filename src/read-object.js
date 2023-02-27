import fs from 'fs';
import MinioClient from './MinioClient.js';

const minioClient = MinioClient();

const bucketName = "minio-guide";

(async () => {
  // read object in chunks and store it as a file
  const fileStream = fs.createWriteStream("data/read-in-chunks.txt");
  const fileObjectKey = "file-api.txt";

  const object = await minioClient.getObject(bucketName, fileObjectKey);
  object.on("data", (chunk) => fileStream.write(chunk));

  object.on("end", () => console.log(`Reading ${fileObjectKey} finished`));
})();
