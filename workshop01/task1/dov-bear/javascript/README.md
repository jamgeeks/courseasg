## Commands to run docker

- Navigate to appropriate folder
- Build image `docker build -t docker.io/(username)/task1:1.0 .`
- Push image `docker image push username/task1:1.0`
- Run image `docker container run -d -p 5000:3000 -e PORT=5000 -e INSTANCE_NAME="instance_name" -e INSTANCE_HASH="instance_hash" username/task1:1.0`
  - set the appropriate environment varaibles: PORT, INSTANCE_NAME and INSTANCE_HASH
