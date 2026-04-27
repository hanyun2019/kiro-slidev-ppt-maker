# US Region Deployment (One-Click)

For **us-east-1** or **us-west-2** — truly one-click experience!

```bash
# Step 1: Download the template
curl -O https://raw.githubusercontent.com/hanyun2019/openclaw-on-aws/main/openclaw-deployment.yaml

# Step 2: Deploy the stack
aws cloudformation create-stack \
  --stack-name openclaw \
  --template-body file://openclaw-deployment.yaml \
  --capabilities CAPABILITY_IAM \
  --region us-east-1

# Step 3: Wait (~10-15 minutes) ☕
aws cloudformation wait stack-create-complete \
  --stack-name openclaw --region us-east-1
```

---

# Optional Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `InstanceType` | t4g.large | Graviton instance (2 vCPU, 8GB RAM) |
| `KeyPairName` | (none) | EC2 key pair for SSH (optional) |
| `CreateVPCEndpoints` | true | Private Bedrock access |
| `AllowedSSHCIDR` | (empty) | CIDR for SSH access (optional) |

```bash
# Example: Use a larger instance
aws cloudformation create-stack \
  --stack-name openclaw \
  --template-body file://openclaw-deployment.yaml \
  --capabilities CAPABILITY_IAM \
  --parameters ParameterKey=InstanceType,ParameterValue=t4g.xlarge
```

---

# Connect & Access

```bash
# Step 4: Get your access info
aws cloudformation describe-stacks \
  --stack-name openclaw \
  --query 'Stacks[0].Outputs'

# Step 5: Get Instance ID
INSTANCE_ID=$(aws cloudformation describe-stacks \
  --stack-name openclaw \
  --query 'Stacks[0].Outputs[?OutputKey==`InstanceId`].OutputValue' \
  --output text)

# Step 6: Start the tunnel
aws ssm start-session \
  --target $INSTANCE_ID \
  --document-name AWS-StartPortForwardingSession \
  --parameters '{"portNumber":["18789"],"localPortNumber":["18789"]}'
```

Then open: **http://localhost:18789/?token=\<your-token\>** 🎉

---

# Non-US Region Deployment

For regions outside US (e.g., Sydney `ap-southeast-2`), update model IDs:

```bash
# Connect to instance
aws ssm start-session --target <instance-id> --region ap-southeast-2

# Edit configuration
nano /home/ubuntu/.openclaw/openclaw.json
```

Replace `us.` prefix with your region's prefix:

```json
{
  "models": {
    "providers": {
      "amazon-bedrock": {
        "models": [
          { "id": "au.anthropic.claude-opus-4-6-v1", "name": "Claude Opus 4.6" },
          { "id": "au.anthropic.claude-sonnet-4-6", "name": "Claude Sonnet 4.6" }
        ]
      }
    }
  }
}
```

---

# Inference Profile Prefixes

| Prefix | Region Type | Regions |
|--------|-------------|---------|
| `us.` | US cross-region | us-east-1, us-east-2, us-west-2, ca-central-1 |
| `eu.` | Europe | eu-central-1, eu-west-1, eu-west-3, eu-north-1 |
| `apac.` | Asia-Pacific | ap-northeast-1, ap-southeast-1, ap-southeast-2 |
| `au.` | Australia | ap-southeast-2, ap-southeast-4 |
| `jp.` | Japan | ap-northeast-1, ap-northeast-3 |
| `global.` | Global | All commercial regions |

<div class="mt-4 bg-[#1a1a2e] border-l-3 border-[#FF9900] p-4">

**Tip**: Query available profiles with `aws bedrock list-inference-profiles --region <your-region>`

</div>

