#!/usr/bin/env bash

# ###########################################################
# Variables
# ###########################################################
OSNAME=$(uname -s)

if [[ ${OSNAME} = "Darwin" ]]; then
    echo "Setting up Coffer"
    curl -fsSL raw.githubusercontent.com/kjbappsllc/coffer/master/src/macos/install.sh | bash
else
    echo "Not supporting Windows OS at this time"
fi