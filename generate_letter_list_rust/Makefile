precommit:
	cargo test

docker-build:
	rm Cargo.lock
	docker build -t generate_letter_list_rust .

docker-run:
	docker run -p 80:80 generate_letter_list_rust

deploy-image:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 653359287504.dkr.ecr.us-east-1.amazonaws.com
	docker tag generate_letter_list_rust:latest 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest
	docker push 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest

pull-image:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 653359287504.dkr.ecr.us-east-1.amazonaws.com
	docker tag generate_letter_list_rust:latest 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest
	docker pull 653359287504.dkr.ecr.us-east-1.amazonaws.com/generate_letter_list_rust:latest