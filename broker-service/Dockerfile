FROM golang:1.21.1-alpine as builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o broker-app ./cmd/api

RUN chmod +x /app/broker-app

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/broker-app /app/broker-app

CMD ["/app/broker-app"]