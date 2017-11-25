#!/bin/bash
tenant=$1
set -f
theString="export * from './styles.$tenant.js'"
echo $theString > ../react/styles/styles.js
