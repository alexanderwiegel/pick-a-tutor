# Run applications

To deploy services on a _local_ machine you must have `docker` and `docker-compose` installed.

Short command:

```
$ docker-compose up --build
```

To stop: `Ctrl+^C`

Full command:

```
$ docker-compose up -f ./docker-compose.yaml app nginx --build --detach
```

To stop:

```
$ docker-compose down
```

# Database

_Refer to `credentials/README.md` on how to connect to the database_.

To **start** the service:

```
$ docker-compose -f database/docker-compose.yml up --detach
```

To **stop** the service:
```
$ docker-compose -f database/docker-compose.yml down
```

# Deployment

## _Linux/MacOS_

First you have to add your key to the server or use the common key (see `credentials/README.md`).

Run the following command from the **top** directory of the project:

```shell
$ rsync -av --delete app/ azureuser@20.113.25.17:~/app/ --exclude='node_modules' && ssh azureuser@20.113.25.17 'cd ~/app/database && docker-compose up --build --detach' && ssh azureuser@20.113.25.17 'cd ~/app && docker-compose up --build --detach'
```