#!/usr/bin/env bash

appcenter codepush release-react -a karan.antham/yemonto --target-binary-version "1.0.5" && code-push promote yemonto Staging Production
