# AWS Architecture Diagram Snippets

Ready-to-use Mermaid diagram templates for common AWS architectures.
All diagrams are pre-styled for the AWS Dark theme (blue lines on dark background).

## How to Use

Copy the Mermaid code block from any template file into your slide:

~~~markdown
```mermaid {scale: 0.8}
graph LR
    ...
```
~~~

Adjust node names, connections, and `{scale: 0.x}` to fit your slide.

## Available Templates

| File | Scenario | Nodes |
|------|----------|-------|
| `aws-basic-web.md` | Classic 3-tier web architecture | CloudFront → ALB → ECS → RDS |
| `aws-serverless.md` | Serverless API | API Gateway → Lambda → DynamoDB |
| `aws-ai-agent-simple.md` | Basic AI agent | User → Strands Agent → Bedrock |
| `aws-ai-agent-production.md` | Production AI agent | + AgentCore + MCP + Observability |
| `aws-data-pipeline.md` | Analytics pipeline | S3 → Glue → Athena → QuickSight |

## Design Guidelines

- **Keep it under 7 nodes** — dense diagrams don't read on slides
- **Use `graph LR` for wide diagrams**, `graph TD` for tall ones
- **Always set `{scale}` for readability** — typically 0.7–0.9
- **Abbreviate long labels** — "Amazon DynamoDB" → "DynamoDB"
- **Group with subgraphs** when you have 2+ logical tiers

See [CUSTOMIZATION.md](../../CUSTOMIZATION.md) for theme variables that
control diagram colors and line widths.
