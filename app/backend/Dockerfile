FROM node:16.13.0

# Set location for the app
WORKDIR /usr/src/backend

# Install dependencies
COPY package.json .
RUN npm install

# Expose ports
EXPOSE 3001

# Copy sources
COPY . .

# Generate test DB table
# RUN node scripts/populate_db_tables.js

# Start the app
CMD ["node", "index.js"]
