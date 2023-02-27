import fs from 'fs';
import MinioClient from './MinioClient.js';

const minioClient = MinioClient();

const bucketName = "minio-guide";

(async () => {
  // create object from file data
  const objectFileName = "file-api.txt";
  const fileData = fs.readFileSync("data/file-api.txt");
  const submitFileDataResult = await minioClient
    .putObject(bucketName, objectFileName, fileData)
    .catch((e) => {
      console.log("Error while creating object from file data: ", e);
      throw e;
    });

  console.log("File data uploaded successfully: ", submitFileDataResult);
})();
