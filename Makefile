precommit:
	npm test
	npm run lint
	make -C generate_letter_list_rust precommit

format:
	npm run lint

test:
	npm test
	pytest --ignore=node_modules

docker-build:
	docker build -t word-game .

docker-run:
	docker run -it -p 8080:80 word-game