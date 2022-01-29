FROM node:16.13.0

# Set location for the app
WORKDIR /usr/src/backend

# Install dependencies
COPY package.json .
RUN npm install

# Expose ports
EXPOSE 3001
EXPOSE 8080

# Copy sources
COPY . .

RUN mkdir -p "/storage/profile_uploads"
RUN mkdir -p "/storage/course_uploads"

ENV PROFILE_STORAGE=/storage/profile_uploads
ENV COURSE_STORAGE=/storage/course_uploads

# Start the app
CMD ["node", "index.js"]
