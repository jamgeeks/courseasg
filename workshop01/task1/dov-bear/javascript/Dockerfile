# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
# file that changes the most is placed first for build efficiency
COPY package*.json .
COPY main.js .
COPY public public
COPY views views

# Run application
RUN npm ci

# Copy the application code
# COPY . .

# Set env variables
ENV PORT=3000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""

# Add health check
# HEALTHCHECK --interval=60s --timeout=5s --start-period=5s --retries=3 \
#   CMD curl http://localhost:${APP_PORT}/health

# Expose the port
EXPOSE ${PORT}

# Start the application
# ENTRYPOINT node main.js ${APP_PORT}
# CMD ["node", "main.js"]
CMD node main.js