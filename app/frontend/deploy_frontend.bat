ssh azureuser@20.113.25.17 "rm -rf ~/app/frontend"
ssh azureuser@20.113.25.17 "mkdir -p ~/app"
move node_modules ../node_modules_backup
scp -r ../frontend azureuser@20.113.25.17:~/app
move ../node_modules_backup node_modules
ssh azureuser@20.113.25.17 "(cd ~/app && docker-compose up -d --build frontend)"
