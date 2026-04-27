# Analytics Data Pipeline

Ingest raw data, transform with Glue, query ad-hoc with Athena, visualize with QuickSight.

## Batch Pipeline

```mermaid {scale: 0.85}
graph LR
    SRC[Data Sources] --> S3r[(S3 — Raw)]
    S3r --> G[AWS Glue ETL]
    G --> S3c[(S3 — Curated)]
    S3c --> AT[Athena]
    AT --> QS[QuickSight]
```

## Streaming + Batch (Lambda Architecture style)

```mermaid {scale: 0.7}
graph TD
    SRC[App Events] --> KDS[Kinesis Data Streams]

    subgraph Hot["Hot Path — Real-time"]
        KDS --> KDF[Kinesis Firehose]
        KDF --> OS[(OpenSearch)]
    end

    subgraph Cold["Cold Path — Batch"]
        KDF --> S3r[(S3 — Raw)]
        S3r --> G[Glue ETL]
        G --> S3c[(S3 — Curated)]
        S3c --> AT[Athena]
    end

    OS --> DASH[Dashboards]
    AT --> QS[QuickSight]
```

## Modern Lakehouse (Iceberg)

```mermaid {scale: 0.75}
graph LR
    SRC[Sources] --> S3[(S3 Data Lake)]
    S3 --> IB[Iceberg Tables]
    IB --> AT[Athena]
    IB --> EMR[EMR / Spark]
    IB --> RS[Redshift Spectrum]
    AT --> QS[QuickSight]
```

## When to pick this

- Centralizing data from multiple sources into S3 as the source of truth
- Ad-hoc SQL queries without managing a data warehouse
- Schema-on-read workflows (JSON, Parquet, CSV)
- Need to combine real-time and historical analytics
