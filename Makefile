precommit:
	npm test
	npm run lint
	pytest --ignore=node_modules

format:
	npm run lint

test:
	npm test
    pytest --ignore=node_modules