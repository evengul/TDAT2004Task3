FROM gcc:4.9

COPY .. /usr/home/TDAT2004Task3
WORKDIR /usr/home/TDAT2004Task3
RUN gcc -o compiled dockers/toCompile.cpp
CMD ["./myapp"]