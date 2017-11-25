#!/usr/bin/env bash

trap 'exit' ERR

EB_CJ_NW_COMMIT=${EB_CJ_NW_COMMIT:-HEAD}
EB_CJ_I18N_COMMIT=${EB_CJ_I18N_COMMIT:-HEAD}

PLATFORM=$1

if [[ ! -d $PLATFORM ]]; then
  echo "No such directory: \"$PLATFORM\""
  exit 1
fi

ROOT_DIR=$(pwd)

git fetch --tags

echo "Checking out $ROOT_DIR/$PLATFORM at $EB_CJ_NW_COMMIT"
cd $ROOT_DIR/$PLATFORM
git fetch --tags
git checkout $EB_CJ_NW_COMMIT

echo "Checking out $ROOT_DIR/translations at $EB_CJ_I18N_COMMIT"
cd $ROOT_DIR/translations
git fetch --tags
git checkout $EB_CJ_I18N_COMMIT
