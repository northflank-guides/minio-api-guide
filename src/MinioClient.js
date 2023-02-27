import dotenv from 'dotenv';
import Minio from 'minio';

function MinioClient() {

  dotenv.config();

  try {
    return new Minio.Client({
      accessKey: process.env.ACCESS_KEY,
      secretKey: process.env.SECRET_KEY,
      endPoint: process.env.HOST,
      pathStyle: true,
    });
  } catch (err) {
    console.log("Error: ", err);
  }
}

export default MinioClient;