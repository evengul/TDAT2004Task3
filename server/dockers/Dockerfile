FROM ubuntu:18.04

RUN sudo apt-get gcc

RUN sudo apt update && sudo apt upgrade -y

COPY . /usr/home/TDAT2004Task3/server/dockers
WORKDIR /usr/home/TDAT2004Task3/server/dockers

CMD gcc -o compiled toCompile.cpp
CMD ./compiled