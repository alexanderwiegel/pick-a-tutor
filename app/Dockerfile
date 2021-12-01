FROM node:16.13.0

WORKDIR /usr/src/app

COPY pick-a-tutor ./
RUN npm install

EXPOSE 3000

ENV NPM_CONFIG_LOGLEVEL verbose
CMD ["node", "index.js"]