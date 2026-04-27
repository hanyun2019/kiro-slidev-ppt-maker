# Layer 1: Silicon Story

<div grid="~ cols-2 gap-6">
<div>

## The Attempt

- 2015: Acquired **Annapurna Labs** ($350M)
- 2019: Launched **Inferentia** (inference)
- 2022: Launched **Trainium** (training)
- 📊 30-40% better price-performance than GPUs

## Why Self-Service Failed

- Neuron SDK alien to PyTorch/CUDA developers
- Poor documentation, sparse tooling
- SageMaker integration delayed months
- Developer experience **was not** the product

</div>
<div>

## The Pivot

Stopped selling to thousands of self-service customers

Started selling **dedicated capacity** to frontier labs

| Customer | Commitment |
|----------|------------|
| Anthropic | 1M+ Trainium2 chips |
| OpenAI | 2 GW Trainium3/4 |

**Result**: $10B+ annual run rate, triple-digit growth

</div>
</div>

---

# Layer 2: Model Story

<div grid="~ cols-2 gap-6">
<div>

## The Attempt

- **Titan** (2023): "Worse than GPT-2"
- **Nova** (2024): 75% lower pricing
- Never appeared on LMSYS leaderboard
- Andrew Ng (Amazon board): "Amazon's foundation models have lagged"

## Why It Failed

- PR/FAQ process filters speculative bets
- No frontier research talent pipeline
- No publication culture
- Adept acqui-hire: 4 of 5 founders left

</div>
<div>

## The Pivot: Bedrock

Instead of building the best model, **host all of them**

- Multi-billion dollar run rate
- 100,000+ customers
- Claude, Llama, Mistral, Nova
- Model-agnostic = platform lock-in

**Y Combinator 2024**: 88% use OpenAI, 4.3% use Bedrock

But Bedrock's revenue validates the **landlord strategy**

</div>
</div>

---

# Layer 3: Agent Story

<div grid="~ cols-2 gap-6">
<div>

## Others Bet on Intelligence

- OpenAI → Operator
- Anthropic → Claude agents
- Google → Agentspace
- Microsoft → Copilot agents

Each bet on the **agent itself**

</div>
<div>

## AWS Built the Plumbing

**Bedrock AgentCore** (GA October 2025):
- Runtime isolation
- Identity management
- Persistent memory
- Observability & policy controls

**Strands SDK**: 2M downloads in 5 months

Model-agnostic, framework-agnostic

</div>
</div>

<div class="mt-4 text-center">

🎯 The indifference **is** the lock-in

</div>

---
layout: center
class: bg-royal
---

# <GradientText color="blue-purple">Three Layers, One Pattern</GradientText>

At each layer, AWS attempted to compete on **intelligence**

Failed or underperformed

Reverted to **infrastructure**

Discovered infrastructure generated **more revenue**

