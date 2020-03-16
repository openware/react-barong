#!/bin/bash

DIFF="$(git diff --raw origin/master VERSION)"

if [ -z "$DIFF" ]
then
    VERSION="patch"
else
    VERSION="$(cat VERSION)"
fi

npm --no-git-tag-version version "$VERSION"
npm publish
grep -Po '"version":.*?[^\\]",' package.json | cut -d "\"" -f 4 > VERSION
git tag "v$(cat VERSION | cut -d "\"" -f 2)"
