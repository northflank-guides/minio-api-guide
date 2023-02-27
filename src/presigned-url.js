import MinioClient from './MinioClient.js';

const minioClient = MinioClient();

const bucketName = "secret-bucket";
const fileName = "private.txt";

(async () => {
    // create private bucket
    console.log(`Creating bucket: ${bucketName}`);
    await minioClient.makeBucket(bucketName).catch((e) => {
        console.log(`Error while creating bucket '${bucketName}': ${e.message}`);
    });

    // create object in bucket
    console.log(`Creating object: ${fileName}`);
    await minioClient
        .putObject(bucketName, fileName, "Private file, accessed with a timed publicly-accessible URL.")
        .catch((e) => {
            console.log("Error while creating object: ", e);
            throw e;
        });

    // create presigned URL to access object
    const presignedURL = await minioClient.presignedUrl('GET', bucketName, fileName, 24*60*60).catch((e) => {
        console.log("Error creating presigned URL: ", e);
    });

    console.log(`Presigned URL for ${fileName} in ${bucketName} created: `, presignedURL);

})();
