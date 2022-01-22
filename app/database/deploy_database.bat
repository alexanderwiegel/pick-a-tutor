ssh azureuser@20.113.56.213 "rm -rf ~/database"
scp -r ../database azureuser@20.113.56.213:~
ssh azureuser@20.113.56.213 "(cd ~/database && docker-compose up -d --build)"
