import MinioClient from './MinioClient.js';
import { v4 as uuidv4 } from 'uuid';

const minioClient = MinioClient();

const bucketName = "minio-guide";

(async () => {
  // create object with high-entropy name
  const objectName = uuidv4();
  const result = await minioClient
    .putObject(bucketName, objectName, "Very secret!")
    .catch((e) => {
      console.log("Error while creating object: ", e);
      throw e;
    });

  console.log("Object uploaded successfully: ", result, " with name: ", objectName);

  console.log("Reading object: ");
  const object = await minioClient.getObject(bucketName, objectName);
  object.on("data", (chunk) => console.log(chunk.toString()));
})();
