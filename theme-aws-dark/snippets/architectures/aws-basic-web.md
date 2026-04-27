# Basic 3-Tier Web Architecture

Classic AWS web app: edge caching, load-balanced compute, managed database.

## Simple (Linear Flow)

```mermaid {scale: 0.85}
graph LR
    U[User] --> CF[CloudFront]
    CF --> ALB[ALB]
    ALB --> ECS[ECS / Fargate]
    ECS --> RDS[(RDS)]
    ECS --> S3[(S3 Assets)]
```

## Grouped (with VPC tiers)

```mermaid {scale: 0.75}
graph TD
    U[User] --> CF[CloudFront]

    subgraph Public
        CF --> ALB[ALB]
    end

    subgraph App["Private — App Tier"]
        ALB --> ECS[ECS / Fargate]
    end

    subgraph Data["Private — Data Tier"]
        ECS --> RDS[(RDS Multi-AZ)]
        ECS --> S3[(S3)]
    end
```

## Variations to try

- Swap `ECS` for `EC2 ASG` or `App Runner`
- Swap `RDS` for `Aurora` / `DynamoDB`
- Add `WAF` in front of `CloudFront`
- Add `ElastiCache` between `ECS` and `RDS`
