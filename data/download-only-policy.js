export const downloadOnlyPolicy = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:GetObject"],
      "Effect": "Allow",
      "Principal": {
        "AWS": ["*"]
      },
      "Resource": ["arn:aws:s3:::minio-guide/*"],
      "Sid": ""
    }
  ]
}
