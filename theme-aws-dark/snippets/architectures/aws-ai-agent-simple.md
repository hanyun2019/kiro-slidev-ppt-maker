# AI Agent — Simple (Strands + Bedrock)

Minimum viable AI agent. Uses the open-source Strands Agents SDK to orchestrate
tool calls against Claude on Amazon Bedrock.

## Linear Flow

```mermaid {scale: 0.85}
graph LR
    U[User] --> A[Strands Agent]
    A --> B[Amazon Bedrock]
    B --> C[Claude Sonnet / Haiku]
    A --> T[Built-in Tools]
```

## With Tool Loop

```mermaid {scale: 0.75}
graph TD
    U[User Request] --> A[Strands Agent SDK]
    A -->|Plan & decide| B[Amazon Bedrock<br/>Claude]
    B -->|Tool call| A
    A -->|Execute| T1[WebSearch]
    A -->|Execute| T2[Code Interpreter]
    A -->|Execute| T3[Custom Tool]
    T1 --> A
    T2 --> A
    T3 --> A
    A -->|Final response| U
```

## Code Sketch

```python
from strands import Agent
from strands.tools import web_search, code_interpreter

agent = Agent(
    model="us.anthropic.claude-sonnet-4-6-v1",
    tools=[web_search, code_interpreter],
)

result = agent.run("Summarize the latest AWS Bedrock release notes")
```

## When to pick this

- Prototyping or small-scale agent workflows
- No long-running sessions or persistent memory needed
- Running locally or on a single server
- Want the simplest possible Strands + Bedrock integration

## Next step

For production workloads with multi-session state, identity, and observability,
see [aws-ai-agent-production.md](./aws-ai-agent-production.md).
