# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:lts-alpine as build-step
# Set the working directory to /app inside the container
WORKDIR /app
# Set the env to "production"
ENV PATH /app/node_modules/.bin:$PATH
# Copy app files
COPY package.json  ./
COPY ./src ./src
COPY ./public ./public
# ==== RUN =======
RUN npm install
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Build step #2: build an Caddy container
FROM caddy:alpine
EXPOSE 80
EXPOSE 443
COPY --from=build-step /app/build /usr/share/caddy
