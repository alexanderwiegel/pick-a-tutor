# Database

_Refer to `credentials/README.md` on how to connect to the database_.

Database is deployed using _docker-compose_.

To **start** the service: 

```
$ docker-compose -f database/docker-compose.yml up --detach
```

To **stop** the service:
```
$ docker-compose -f database/docker-compose.yml down
```

To deploy a database on a _local_ machine you must have `docker` and `docker-compose` installed.