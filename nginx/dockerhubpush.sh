#!/bin/bash
docker system prune
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t 4kit0/yagodnaya-polyana-nginx:latest --push .
$SHELL
