if not exist .git echo Please create a git repository first! & pause

call npm init -y

call npm install --save-dev @commitlint/config-conventional @commitlint/cli

echo module.exports = {extends: ['@commitlint/config-conventional']} > commitlint.config.js

call npm install husky --save-dev

call npx husky install

::call npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
echo #!/bin/sh > .husky\commit-msg
echo . "$(dirname "$0")/_/husky.sh" >> .husky\commit-msg
echo.  >> .husky\commit-msg
echo npx --no-install commitlint --edit "$1" >> .husky\commit-msg
pause
