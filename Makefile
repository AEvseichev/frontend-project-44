install: # устанавливаем зависимости 
	npm ci

brain-games: # start games
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link