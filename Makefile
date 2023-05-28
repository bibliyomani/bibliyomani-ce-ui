.PHONY: default

default: build

version = 29052023

build:
	docker build --no-cache -t bibliyomani-ui:$(version) --build-arg ENV=production .