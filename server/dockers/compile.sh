#!/bin/bash
touch toCompile.cpp
echo "$CONTENT" >| toCompile.cpp
g++ -o compiled toCompile.cpp
./compiled
rm compiled
rm toCompile.cpp