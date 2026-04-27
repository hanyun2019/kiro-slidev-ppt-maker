# Serverless API Architecture

Pay-per-invocation, zero idle cost. Ideal for event-driven workloads and APIs.

## REST API

```mermaid {scale: 0.85}
graph LR
    C[Client] --> AG[API Gateway]
    AG --> L[Lambda]
    L --> DDB[(DynamoDB)]
    L --> S3[(S3)]
```

## With Auth & Async Processing

```mermaid {scale: 0.7}
graph TD
    C[Client] --> CU[Cognito]
    C --> AG[API Gateway]

    CU -.->|JWT| AG
    AG --> L1[Lambda — API]

    L1 --> DDB[(DynamoDB)]
    L1 --> SQS[SQS Queue]

    SQS --> L2[Lambda — Worker]
    L2 --> S3[(S3)]
    L2 --> SES[SES Email]
```

## Event-Driven (EventBridge)

```mermaid {scale: 0.8}
graph LR
    S3[(S3 Upload)] --> EB[EventBridge]
    EB --> L1[Lambda — Resize]
    EB --> L2[Lambda — Index]
    L1 --> S3o[(S3 Thumbnails)]
    L2 --> OS[(OpenSearch)]
```

## When to pick this

- Unpredictable or spiky traffic
- Short-lived request handling (under 15 minutes)
- Want to avoid managing servers or containers
- Event-driven integrations between AWS services
