install: # устанавливаем зависимости 
	npm ci

brain-games: # start games
	node bin/brain-games.js

brain-even: # start game brain-even
	node bin/brain-even.js

brain-calc: # start game brain-calc
	node bin/brain-calc.js

brain-gcd: # start game brain-gcd
	node bin/brain-gcd.js

publish: # отладка перед публикацией
	npm publish --dry-run

link: # устанавливаем пакет 
	npm link --dry-run

lint: # запуск eslint
	npx eslint .

lint-fix: 
	npx eslint --fix .
	