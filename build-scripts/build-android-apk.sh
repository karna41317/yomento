#!/usr/bin/env bash

trap 'exit' ERR
ROOT_DIR=$(pwd)

cd $ROOT_DIR
build-scripts/npm-reinstall.sh

cd $ROOT_DIR/android
build-scripts/build-apk.sh
