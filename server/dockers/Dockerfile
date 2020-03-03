FROM ubuntu:bionic

RUN apt-get update && apt-get install -y python3

COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers

ENTRYPOINT ["sudo ./compile.sh"]