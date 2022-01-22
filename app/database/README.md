# Database server

```
ip: 20.113.56.213
username: azureuser
password: ^56#eSMF5e2656YRjtSQ
```

# Deploy the db

## Windows

```
$ .\deploy_database.bat
```

## Linux/MacOS

```
$ ansible-playbook deploy-database.yaml -i 20.113.56.213,
```

or

```
$ bash ./deploy_database.bat
```