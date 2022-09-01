#!/bin/sh

# Config Git
git config branch.main.rebase true

# Copy Git Hooks
cp -R tools/hooks/* .git/hooks/

# Download Theme And Run Setup
git clone git@github.com:OMSTest/omstest-theme.git themes/omstest-theme
pushd themes/omstest-theme
./setup.sh
popd

#Install NPM Packages
npm install