#!/bin/bash

DIFF="$(git diff --raw origin/master VERSION)"

curl -X PUT -H "content-type: application/json" -d '{"name": "'$1'", "password": "'$2'"}' http://registry.npmjs.org/-/user/org.couchdb.user:$1

if [ -z "$DIFF" ]
then
    VERSION="patch"
else
    VERSION="$(cat VERSION)"
fi

npm --no-git-tag-version version "$VERSION"
npm publish
#jq .version package.json | cut -d "\"" -f 2 > VERSION
