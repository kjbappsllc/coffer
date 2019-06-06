#!/usr/bin/env bash

# ###########################################################
# Variables
# ###########################################################
OSNAME=$(uname -s)

if [[ OSNAME == "Darwin" ]]; then
    curl -fsSL raw.githubusercontent.com/kjbappsllc/coffer/master/src/macos | cat
else
    echo "Not supporting Windows OS at this time"
fi