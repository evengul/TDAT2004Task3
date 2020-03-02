FROM ubuntu:bionic

RUN apt-get update && apt-get install -y build-essential

COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers


ENTRYPOINT["/bin/bash"]
CMD["./compile.sh"]