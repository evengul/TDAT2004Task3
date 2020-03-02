FROM ubuntu:bionic

RUN apt-get update && apt-get install -y build-essential git cmake autoconf libtool pkg-config


COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers

RUN rm CMakeCache.txt
RUN rm Makefile
RUN rm compiled
RUN rm -r CMakeFiles
RUN rm cmake_install.cmake

CMD ["cmake", "."]
RUN ["cmake", "--build", "."]

RUN ls

CMD ["./compiled"]