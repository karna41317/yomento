#!/usr/bin/env bash

trap 'exit' ERR

rm -rf node_modules
yarn install
rm -rf $TMPDIR/react-*
