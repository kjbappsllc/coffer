#!/usr/bin/env bash

# ###########################################################
# Variables
# ###########################################################
OSNAME=$(uname -s)
echo "${OSNAME}"

if [[ ${OSNAME} = "Darwin" ]]; then
    ruby -e $(curl -fsSL raw.githubusercontent.com/kjbappsllc/coffer/master/src/macos/install.sh | cat)
else
    echo "Not supporting Windows OS at this time"
fi