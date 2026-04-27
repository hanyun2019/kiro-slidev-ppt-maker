# Cost Estimate (Monthly)

| Resource | Specs | Cost | Calculation |
|----------|-------|------|-------------|
| EC2 (t4g.large) | 2 vCPU, 8GB RAM | ~$49 | $0.0672/hr × 730 hrs |
| EBS (gp3) | 50GB | ~$4 | $0.08/GB × 50GB |
| VPC Endpoints (×4) | Interface type | ~$29 | $0.01/hr × 730 hrs × 4 |
| Bedrock API | Usage-based | Variable | — |
| **Total (excl. API)** | — | **~$82** | — |

<div class="mt-4 bg-[#1a1a2e] border-l-3 border-[#00d4aa] p-4">

💡 **Cost-saving tip**: Set `CreateVPCEndpoints=false` to save ~$29/month

Traffic still encrypted via TLS, but traverses public internet

</div>

---

# Common Commands

<div grid="~ cols-2 gap-6">
<div>

## Configuration

```bash
# Interactive config
openclaw config

# Edit config file
nano /home/ubuntu/.openclaw/openclaw.json

# Restart after changes
systemctl --user restart \
  openclaw-gateway.service
```

</div>
<div>

## Maintenance

```bash
# Update OpenClaw
npm update -g openclaw
systemctl --user restart \
  openclaw-gateway.service

# Retrieve gateway token
aws ssm get-parameter \
  --name "/openclaw/<stack>/gateway-token" \
  --with-decryption \
  --query 'Parameter.Value' \
  --output text
```

</div>
</div>

---

# FAQ: Troubleshooting

<div grid="~ cols-2 gap-6">
<div>

## Stack Timeout?

Check the setup log:

```bash
cat /var/log/openclaw-setup.log
```

**Common causes:**
- Network issues during downloads
- Bedrock model access not approved

</div>
<div>

## Access via SSM

**Option 1**: AWS Console
- EC2 Console → Select instance
- Connect → Session Manager → Connect

**Option 2**: CLI

```bash
aws ssm start-session \
  --target <instance-id>
```

Then: `sudo su - ubuntu && openclaw tui`

</div>
</div>

---

# Tear Down

When you're done, clean up everything:

```bash
aws cloudformation delete-stack --stack-name openclaw --region us-east-1
```

This removes **everything**:
- ✅ EC2 instance
- ✅ VPC and subnets
- ✅ IAM roles
- ✅ VPC endpoints
- ✅ Security groups

**Clean and complete!** 🧹

---
layout: center
class: bg-tech
---

# <GradientText color="blue-purple">Series Preview</GradientText>

## Four Ways to Deploy OpenClaw on AWS

| Method | Use Case | Status |
|--------|----------|--------|
| **EC2 Deployment** | Full control, custom config | ✅ This guide |
| **Lightsail** | Simple, fixed monthly cost | 📝 Coming soon |
| **AgentCore** | Managed, no infra management | 📝 Coming soon |
| **EKS** | Containerized, enterprise-grade | 📝 Coming soon |

