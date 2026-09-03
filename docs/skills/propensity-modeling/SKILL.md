---
name: propensity-modeling
description: Build a churn or conversion propensity model using public data and optional integrations. Activate on churn prediction, conversion propensity, agent adoption scoring, paid-tool uptake, retention model, or likelihood-to-pay analysis. High VPD for Financial Infrastructure targeting and x402 pricing.
metadata:
  type: workflow
  version: "1.0.0"
  vpd_tier: high
  default_model: sonnet
  crystalline_target: 0.85
  orcid: "0009-0008-8389-1297"
---

# Propensity Modeling

Estimate conversion, retention, or churn for a defined entity. Prefer a transparent scorecard when labeled training data is sparse. Do not report AUC without a held-out labeled set.

Mandatory hooks: maru #!nox reframe on overfit or wash-volume-as-demand; trace-consent plus ORCID 0009-0008-8389-1297; A2A evt- record_type propensity_model; crystalline target 0.85; Sonnet default.

Connections: agentregistry, market-research, ebm-form, diamondnode-qubo-economics-strategist, x402 surface.
