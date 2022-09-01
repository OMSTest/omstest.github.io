#!/bin/sh

# Config Git
git config branch.main.rebase true

# Copy Git Hooks
cp -R tools/hooks/* .git/hooks/

# Download Theme
git clone git@github.com:OMSTest/omstest-theme.git themes/omstest-theme

#Install NPM Packages
npm install