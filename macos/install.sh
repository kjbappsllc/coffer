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

command -v docker > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Docker tools are not installed"
    open -a "Docker"
else
    text "Docker tools are installed"
fi

text "Checking docker installation"
docker run hello-world > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Docker was not installed correctly"
    exit 1
else
    text "Docker installed succcessfully"
    docker ps -a | awk '{ print $1,$2 }' | grep hello-world | awk '{print $1 }' | xargs -I {} docker rm {} > /dev/null 2>&1
    docker image rm hello-world > /dev/null 2>&1
fi

text "Installing necessary images"

docker inspect v2tec/watchtower > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Watchtower not installed"
    text "Installing Watchtower"
    docker pull v2tec/watchtower > /dev/null 2>&1 
else
    text "Watchtower is installed"
fi

docker inspect mongodb:4.0.10 > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "Mongodb not installed"
    text "Installing mongodb:4.0.10"
    docker pull mongodb:4.0.10 > /dev/null 2>&1 
else
    text "mongodb:4.0.10 is installed"
fi

docker inspect kbutts314/coffer-ui > /dev/null 2>&1

if [[ $? != 0 ]]; then
    text "coffer-ui not installed"
    text "Installing coffer-ui"
    docker pull kbutts314/coffer-ui > /dev/null 2>&1 
else
    text "kbutts314/coffer-ui is installed"
fi