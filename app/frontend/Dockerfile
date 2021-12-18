FROM node:16.13.0

# Set location for the app
WORKDIR /usr/src/frontend

# Install dependencies
COPY package.json .
RUN npm install

# Expose ports
EXPOSE 3000

# Expose ports
ENV CI=true

# Copy sources
COPY . .

# Start the app
CMD ["npm", "start"]
