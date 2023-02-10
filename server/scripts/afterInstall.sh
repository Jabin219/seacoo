#!/bin/bash
cd /home/ec2-user/seacoo
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 14
npm install --global yarn
yarn global add pm2
yarn
yarn run migrate up
