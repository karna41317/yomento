#!/usr/bin/env bash

trap 'exit' ERR

PLATFORM=$1

if [[ ! -d $PLATFORM ]]; then
  echo "Invalid platform: \"$PLATFORM\""
  exit 1
fi

CHANGES_FILE_NAME=changes-$PLATFORM.txt

build-scripts/checkout.sh $PLATFORM

collect-refs ()
{
  # This function runs a subshell where it moves into the given dir.
  # It asks git for all known refs (branches and tags) that point at the
  # current HEAD, then removes "origin/" from the begining and removes
  # duplicates using sort and uniq. This makes sure remote branch and tracking
  # branch pairs are only counted once. HEAD is removed if it is in the list.
  # Then as a trick, xargs is used to put all the items on one line, separated
  # by space, and sed is used to replace space with comma-space.
  # The end result is a one-line comma-space-separated list of branches and tags.
(cd $1 && git for-each-ref --points-at HEAD --format "%(refname:short)"\
 | sed 's/^origin\///'\
 | sort --ignore-case\
 | uniq\
 | sed -n '/^HEAD$/!p'\
 | xargs\
 | sed 's/ /, /g')
}

(
echo "*Branch/tag*"
echo
echo "customer_journey: $(collect-refs .)"
echo
echo "$PLATFORM: $(collect-refs $PLATFORM)"
echo
echo "translations: $(collect-refs translations)"
echo
echo "*Recent changes*"
echo
build-scripts/collect-changes.sh . $PLATFORM translations
) > $CHANGES_FILE_NAME

echo "##teamcity[publishArtifacts '+:$CHANGES_FILE_NAME']"
