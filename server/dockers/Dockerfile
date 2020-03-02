FROM ubuntu:bionic

RUN apt-get update && apt-get install -y build-essential git cmake autoconf libtool pkg-config


COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

RUN cmake .
RUN cmake --build .

RUN ls

RUN ./compiled