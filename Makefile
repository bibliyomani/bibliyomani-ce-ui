.PHONY: default

default: run

run:
	docker build -t bibliyomani-ui --build-arg ENV=production .