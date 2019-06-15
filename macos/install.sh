#!/usr/bin/env bash

##########
# CHECK ENVIRONMENT
#########

text() {
   echo " ====> ${1}"
}

command -v brew  > /dev/null 2>&1

if [[ $? != 0 ]]; then
    echo ""
    text "Brew not installed"
    text "Installing Brew"
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    text "Brew is installed"
fi

brew cask list | grep docker > /dev/null 2>&1

if [[ $? != 0 ]]; then
    echo ""
    text "Docker is not installed"
    text "Installing Docker"
    brew cask install docker
else
    text "Docker is installed"
fi

text "Checking if docker daemon is running"

command -v docker > /dev/null 2>&1

if [[ $? != 0 ]]; then
    # On Mac OS this would be the terminal command to launch Docker
    open /Applications/Docker.app
    #Wait until Docker daemon is running and has completed initialisation
    text "Waiting for Docker to launch..."
    while true; do
        docker stats --no-stream > /dev/null 2>&1
        if [[ $? = 0 ]]; then
            break
        fi
        # Docker takes a few seconds to initialize
        sleep 1
    done
fi

text "Docker is running"
text "Installing necessary images"

docker inspect v2tec/watchtower > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Watchtower not installed"
    text "Installing Watchtower"
    docker pull v2tec/watchtower 
else
    text "Watchtower is installed"
fi

docker inspect mongo:4.0.10 > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Mongodb not installed"
    text "Installing mongo:4.0.10"
    docker pull mongo:4.0.10
else
    text "mongo:4.0.10 is installed"
fi

docker inspect kbutts314/coffer-ui > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "coffer-ui not installed"
    text "Installing coffer-ui"
    docker pull kbutts314/coffer-ui
else
    text "kbutts314/coffer-ui is installed"
fi

docker inspect kbutts314/coffer-db-service > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "coffer-db-service not installed"
    text "Installing coffer-db-service"
    docker pull kbutts314/coffer-db-service
else
    text "kbutts314/coffer-db-service is installed"
fi