#!/usr/bin/env bash

trap 'exit' ERR

ROOT_DIR=$(pwd)

cd buildenv/android-build
# If env var is set and not null, use --no-cache option.
docker build ${EB_DOCKER_NO_CACHE:+--no-cache} -t buildenv-android-build .

env | ( grep EB_ > $TMPDIR/.ebbuildenvs || true )

# If yarn is installed locally, reuse it's cache dir in the container.
YARN_CACHE_DIR=$(yarn cache dir 2> /dev/null || echo $HOME/.cache/yarn)

cd $ROOT_DIR
docker run \
  --rm \
  -w /work \
  -v $(pwd):/work \
  -v ~/.aws/credentials:/root/.aws/credentials \
  -v ~/.gradle/gradle.properties:/root/.gradle/gradle.properties \
  -v ~/.android.keystore:/root/.android.keystore \
  -v ~/.ssh:/root/.ssh \
  -v $YARN_CACHE_DIR:/root/.yarncache \
  -v ~/.gradle/caches:/root/.gradle/caches \
  -v ~/.gradle/wrapper/dists:/root/.gradle/wrapper/dists \
  -e "ANDROID_VERSION_CODE" \
  -e "YARN_CACHE_FOLDER=/root/.yarncache" \
  --env-file $TMPDIR/.ebbuildenvs \
  buildenv-android-build $@
