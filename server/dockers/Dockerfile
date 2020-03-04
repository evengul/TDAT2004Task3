FROM ubuntu:bionic

RUN apt-get update && apt-get install -y python3

COPY . /usr/home/TDAT2003Task3/server/dockers

WORKDIR /usr/home/TDAT2003Task3/server/dockers

ARG CONTENT="print(\"Some text\")"
ENV CONTENT="${CONTENT}"

ADD . $CONTENT

ENTRYPOINT ["python3 runfile.py"]