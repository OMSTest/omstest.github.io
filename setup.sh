#!/bin/sh

# Config Git
git config branch.main.rebase true

# Copy Git Hooks
cp -R tools/hooks/* .git/hooks/

# Download Theme
./tools/dl-theme

# Download Static
./tools/dl-static

# Install NPM Packages
npm install

# Copy production config to _default (dev) to run local server
cp -R config/production/config.toml config/_default/config.toml