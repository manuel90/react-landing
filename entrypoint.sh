
if [ ! -f .env ] && [ -f .env.example ] ; then
    cp .env.example .env
fi

if [ ! -d node_modules ] && [ -f package.json ] ; then
    echo "Running: npm install"
    npm install -g sass
    npm install -g gulp
    npm install
fi

#npm run start

tail -f /dev/null


