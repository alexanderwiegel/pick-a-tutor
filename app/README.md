# Run applications

To deploy services on a _local_ machine you must have `docker` and `docker-compose` installed.

Short command:

```
$ docker-compose up --build -d
```

Full command:

```
$ docker-compose up -f ./docker-compose.yaml backend nginx frontend --build --detach
```

To stop:

```
$ docker-compose down
```

# Deployment

## _Linux/MacOS_

First you have to add your key to the server or use the common key (see `credentials/README.md`).

Install `ansible` on your machine.

Run the following command:

```
$ ansible-playbook deploy.yml -i 20.113.25.17,
```

Make sure you did not miss the comma (`,`)!

`deploy.yml` is located in `app/` directory. You can run the command from any folder but make sure that you pass the correct path to `deploy.yml`.

# Database

_Refer to `credentials/README.md` on how to connect to the database_.

First enter `database` directory.

To **start** the service:

```
$ docker-compose up --build -d
```

To **stop** the service:
```
$ docker-compose down
```
