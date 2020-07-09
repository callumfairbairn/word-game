FROM rust:1.40 as builder
WORKDIR /
COPY . .
RUN cargo install --path .

FROM debian:buster-slim
RUN apt-get update && rm -rf /var/lib/apt/lists/*
COPY --from=builder /usr/local/cargo/bin/generate_letter_list_rust /usr/local/bin/generate_letter_list_rust
COPY /src/words.json ./src/words.json
CMD ["generate_letter_list_rust"]