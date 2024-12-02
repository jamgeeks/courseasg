# build container - multistage build
# default name is 0 if gobuilder is undefined
FROM golang:1.23-alpine3.20 as gobuilder

WORKDIR /src

COPY go.* .
COPY main.go .

# /src/main
RUN go build -o main main.go

# create the run container
FROM alpine:3.20

WORKDIR /app

# copying from gobiulder:/src/main to /app/main
COPY --from=gobuilder /src/main /app/main
COPY public public
COPY templates templates

ENV PORT=3000

EXPOSE ${PORT}

# can also use this as shell then no need CMD
# this method used when there's no access to shell
ENTRYPOINT [ "/app/main" ]

CMD []
