install: # устанавливаем зависимости 
	npm ci

brain-games: # start games
	node bin/brain-games.js

publish: # отладка перед публикацией
	npm publish --dry-run

link: # устанавливаем пакет 
	npm link --dry-run

lint: # запуск eslint
	npx eslint .

lint-fix: 
	npx eslint --fix .
	