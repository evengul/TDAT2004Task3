FROM ubuntu:bionic

RUN apt-get update && apt-get install -y build-essential git cmake autoconf libtool pkg-config

ARG CONTENT="#include <iostream> \n int main(){std::cout << \"Hello World!\" << std::endl; return 0;}"

COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers

RUN touch toCompile.cpp

RUN echo $CONTENT >| toCompile.cpp

RUN echo toCompile.cpp

RUN g++ -o compiled toCompile.cpp

CMD ["./compiled"]