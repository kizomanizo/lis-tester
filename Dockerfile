# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

RUN mkdir -p /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install app dependencies
RUN npm install --silent

# Copy all files to the app location
COPY . ./

# Expose the port
EXPOSE 3004
