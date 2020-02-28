FROM ubuntu:18.04

COPY . /usr/home/TDAT2004Task3/server/dockers
WORKDIR /usr/home/TDAT2004Task3/server/dockers

RUN apt-get install gcc

RUN apt update && apt upgrade -y

CMD gcc -o compiled toCompile.cpp
CMD ./compiled