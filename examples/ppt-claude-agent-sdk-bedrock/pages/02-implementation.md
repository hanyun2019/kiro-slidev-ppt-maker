# Prerequisites

Before running, verify your AWS setup:

```bash
# Check AWS CLI
aws --version

# Verify credentials
aws configure get aws_access_key_id

# Test Bedrock access
aws bedrock list-foundation-models \
  --query "modelSummaries[?contains(modelId, 'claude')]" \
  --output table
```

<div grid="~ cols-3 gap-4" class="mt-6">
<div class="bg-[#1a1a2e] border-l-3 border-[#FF9900] p-4">

**AWS Credentials**

`~/.aws/credentials` or environment variables

</div>
<div class="bg-[#1a1a2e] border-l-3 border-[#5dade2] p-4">

**Bedrock Access**

Model access enabled in AWS console

</div>
<div class="bg-[#1a1a2e] border-l-3 border-[#00d4aa] p-4">

**IAM Permissions**

`bedrock:InvokeModel`

</div>
</div>

---

# Complete Example (Part 1)

```python
import asyncio
import os
from dotenv import load_dotenv
from claude_agent_sdk import (
    AgentDefinition, ClaudeSDKClient, ClaudeAgentOptions, AssistantMessage,
)

load_dotenv()

AWS_REGION = os.environ.get("AWS_REGION", "us-west-2")

# Key configuration for Bedrock
os.environ["CLAUDE_CODE_USE_BEDROCK"] = "1"
os.environ["AWS_REGION"] = AWS_REGION
```

📌 **Key Point**: Set environment variables before creating the client

---

# Complete Example (Part 2)

```python
async def main():
    agents = {
        "docs_researcher": AgentDefinition(
            description="Finds information from official documentation.",
            prompt="You research official docs.",
            tools=["WebSearch", "WebFetch"],
            model="haiku"
        ),
    }
    
    options = ClaudeAgentOptions(
        system_prompt="You are a helpful assistant.",
        allowed_tools=["Skill", "Task", "Write", "Bash", "WebSearch", "WebFetch"],
        model="sonnet",
        agents=agents
    )
```

---

# Complete Example (Part 3)

```python
    async with ClaudeSDKClient(options=options) as client:
        await client.query("Hello!")
        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                print(message.content)

asyncio.run(main())
```

<div class="mt-6 bg-[#1a1a2e] border-l-3 border-[#FF9900] p-4">

**Model Names**: Use `"sonnet"`, `"haiku"` — the SDK automatically maps to Bedrock model IDs

</div>

---

# Adding MCP Servers (Optional)

MCP servers like Notion work the same way:

```python
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")

mcp_servers = {}

if NOTION_TOKEN:
    mcp_servers["notion"] = {
        "command": "npx",
        "args": ["-y", "@notionhq/notion-mcp-server"],
        "env": {"NOTION_TOKEN": NOTION_TOKEN},
    }

options = ClaudeAgentOptions(
    mcp_servers=mcp_servers,
    # ... other options
)
```

💡 **Tip**: Check if token exists before adding config to avoid validation errors

