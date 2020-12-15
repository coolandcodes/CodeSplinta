#!/bin/bash

set -e;

if [ "$pkg_skip_preinstall" == "yes" ]; then
  echo "Skipping 'CodeSplinta' package preinstall routine.";
  exit 0;
fi

basedir="$(pwd)"
find="/.bin"
replace=""

path=${basedir//$find/$replace}

pcfile="$path/.git/hooks/pre-commit"
pmfile="$path/.git/hooks/pre-merge"

if [ -f "$pcfile" ]; then
    rm "$path/.git/hooks/pre-commit"
    rm "$path/.git/hooks/pre-commit-hook.js"
fi

if [ -f "$pmfile" ]; then
    rm "$path/.git/hooks/pre-merge"
    rm "$path/.git/hooks/pre-merge-hook.js"
fi

if [[ $(cp "$path/_githooks/post-merge" "$path/_githooks/post-merge-hook.js" "$path/.git/hooks") -eq 0 ]]; then
    echo "Setting up custom StitchApp POST_MERGE Git Hook..."
else
    exit 1
fi

if [[ $(cp "$path/_githooks/pre-commit" "$path/_githooks/pre-commit-hook.js" "$path/.git/hooks") -eq 0 ]]; then
    echo "Setting up custom StitchApp PRE_COMMIT Git Hook..."
    exit 0
else
    exit 1
fi
