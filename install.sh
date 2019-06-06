#!/usr/bin/env bash

# ###########################################################
# Variables
# ###########################################################
OSNAME=$(uname -s)

if [[ ${OSNAME} = "Darwin" ]]; then
    echo "Setting up Coffer Mac"
    sh -c $(curl -fsSL raw.githubusercontent.com/kjbappsllc/coffer/master/src/macos/install.sh)
else
    echo "Not supporting Windows OS at this time"
fi