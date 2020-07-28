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
	docker run -it -p 80:80 word-game

publish-image:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 653359287504.dkr.ecr.us-east-1.amazonaws.com
	docker tag word-game:latest 653359287504.dkr.ecr.us-east-1.amazonaws.com/word-game:latest
	docker push 653359287504.dkr.ecr.us-east-1.amazonaws.com/word-game:latest

pull-word-game-image:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 653359287504.dkr.ecr.us-east-1.amazonaws.com
	docker pull 653359287504.dkr.ecr.us-east-1.amazonaws.com/word-game:latest
	docker tag 653359287504.dkr.ecr.us-east-1.amazonaws.com/word-game:latest word-game:latest

pull-letter-list-image:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 653359287504.dkr.ecr.us-east-1.amazonaws.com
	docker pull 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest
	docker tag 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest generate_letter_list_rust:latest
