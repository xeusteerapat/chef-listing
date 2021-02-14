# Graphql & Sequalize project

## Database setup

You'll need Docker

```sh
docker run \
  -p 0.0.0.0:7999:3306 \
  --name chef-db \
  -e MYSQL_ROOT_PASSWORD=YOUR_PASSWORD \
  -e MYSQL_USER=chef-dev \
  -e MYSQL_PASSWORD=YOUR_PASSWORD \
  -e MYSQL_DATABASE=chef \
  -d mysql:5.7.20
```
