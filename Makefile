.PHONY: default

default: build

build:
	docker build --no-cache -t bibliyomani-ui --build-arg ENV=production .