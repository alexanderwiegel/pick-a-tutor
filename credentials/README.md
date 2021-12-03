# Credentials

## Connecting to the server

Connection can be done via SSH using the private key `id_rsa`. This can be done with an SSH-client application for your Windows installation or in command line on Windows/Linux/Mac using the following command:

```
$ ssh -i id_rsa azureuser@20.113.25.17
```

`id_rsa.pub` is a public key that is deployed on the server.

There is an LTS version of Node.js installed on the server:


```
azureuser@GDSD:~$ node -v
v16.13.0
```

```
azureuser@GDSD:~$ npm -v
8.1.0
```

To verify that Node.js installation works you can run the hello world program from the root home folder:
```
azureuser@GDSD:~$ node hello_world.js
Hello world!
```

## Connecting to the test database

Connection to the MySQL database can be done using a MySQL client such as _MySQL workbench_ or via the command line client using the following command:

```
$ mysql -u mysqluser -p'attic-humorous-stylishly' -h 20.113.25.17 -P 3306 -D db
```

Credentials of the database:

```
Host:       20.113.25.17
Port:       3306
Username:   mysqluser
Password:   attic-humorous-stylishly
DB name:    db
```