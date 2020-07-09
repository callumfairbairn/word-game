precommit:
	cargo test

docker-build:
	rm Cargo.lock
	docker build -t generate_letter_list_rust .

docker-run:
	docker run -it --rm --name generate_letter_list_rust_running generate_letter_list_rust