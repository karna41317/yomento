#!/usr/bin/env bash

trap 'exit' ERR

collect_paths=$@
COLLECT_CHANGES_HOURS=${COLLECT_CHANGES_HOURS:-72}

ROOT_DIR=$(pwd)

for collect_path in $collect_paths; do
  cd $ROOT_DIR/$collect_path
  git log --pretty=format:"%ct~~~~~%B" --since="$COLLECT_CHANGES_HOURS hours"
done\
  | build-scripts/format-changes.py
