FROM oven/bun:1.0.28-alpine

# Get from .env
ARG PROJECT
ARG DOCKER_FOLDER
RUN echo "Project: ${PROJECT}"

# Install bash
RUN apk add --no-cache bash

WORKDIR ${DOCKER_FOLDER}

COPY package*.json ./

RUN bun install --global tsx 


