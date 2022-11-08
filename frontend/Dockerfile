# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18.12-alpine

# Set the working directory to /app inside the container
WORKDIR /src
ENV PATH="./node_modules/.bin:$PATH"

# Copy app files
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

# Build the app
RUN npm run build

# Start the app
CMD [ "npm", "start" ]