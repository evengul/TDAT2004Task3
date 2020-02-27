FROM gcc:4.9

COPY .. /usr/home/TDAT2004Task3/server/dockers
WORKDIR /usr/home/TDAT2004Task3/server/dockers
RUN gcc -o compiled toCompile.cpp
CMD ["./compiled"]