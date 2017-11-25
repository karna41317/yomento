#!/usr/bin/env bash

trap 'exit' ERR
ROOT_DIR=$(pwd)

cd $ROOT_DIR
. ~/.crowdin/crowdin.ebccocj

# Upload
curl \
  --location \
  --form "key=$CROWDIN_PROJ_KEY" \
  --form "files[/react/keys.source.json]=@react/i18n/keys.source.json" \
  https://api.crowdin.com/api/project/$CROWDIN_PROJ_ID/update-file | tee $TMPDIR/crowdin_upload_result.xml
grep success $TMPDIR/crowdin_upload_result.xml &>/dev/null
