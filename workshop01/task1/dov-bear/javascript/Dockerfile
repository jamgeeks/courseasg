# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json .
COPY main.js .
COPY public public
COPY views views

# Run application
RUN npm ci

# Copy the application code
# COPY . .

# Set env variables
ENV APP_PORT=3000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""

# Expose the port
EXPOSE ${APP_PORT}

# Start the application
# ENTRYPOINT node main.js ${APP_PORT}
CMD ["node", "main.js"]