#!/bin/bash

npm --no-git-tag-version version "$VERSION"
npm publish