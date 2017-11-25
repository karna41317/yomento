#!/usr/bin/env bash

trap 'exit' ERR

ROOT_DIR=$(pwd)

cd buildenv/crowdin-upload
# If env var is set and not null, use --no-cache option.
docker build ${EB_DOCKER_NO_CACHE:+--no-cache} -t buildenv-crowdin-upload .

env | ( grep EB_ > $TMPDIR/.ebbuildenvs || true )

cd $ROOT_DIR
docker run\
 --rm\
 -w /work\
 -v $(pwd):/work\
 -v ~/.crowdin:/root/.crowdin\
 --env-file $TMPDIR/.ebbuildenvs\
 buildenv-crowdin-upload $@
