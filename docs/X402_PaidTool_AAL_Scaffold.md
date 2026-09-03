# x402 paidTool AAL Scaffold — Approved Execution
**Date**: 2026-09-03  
**Operator**: Igor Holt (ORCID 0009-0008-8389-1297)  
**Status**: SCAFFOLD COMPLETE — production Worker deploy BLOCKED pending wallet + auth gates  
**Alignment**: Financial Infrastructure | Intrinsic Pursuit | Hybridization

## Approval scope executed
1. Re-scaffold + validate `market-research` and `propensity-modeling`.
2. Publish registry pack + this scaffold to GitHub (`igor-holt/Igor-Holt`).
3. Draft AAL-compatible x402 paidTool surface for four tools. No live overwrite of existing Workers.

## Existing Cloudflare surface (do not clobber)
Live scripts already include:
- `ambient-access-layer` (modified 2026-08-12)
- `ambient-mcp-server`
- `a2a-skill-registry`
- `gc-ambient-gateway`
- `ambient-api`

AAL skill rule stands: no production deploy without verified auth, replay protection, rate limit, audit, and secret rotation.

## Paid tool catalog (unique tools only)

| Tool | Price USD | Band | Skill |
|---|---|---|---|
| `ebm_energy` | 0.10 | compute | ebm-form |
| `registry_query` | 0.05 | discovery | agentregistry |
| `market_brief` | 15.00 | report | market-research |
| `propensity_score` | 1.00 | compute | propensity-modeling |

Pricing follows the 2026-08-26 analysis: do not sell $0.001 commodity calls.

## Deploy gates still open
- Receiving wallet address (Base USDC `payTo`)
- Facilitator URL confirm (`https://x402.org/facilitator`)
- Network: `eip155:8453` mainnet only after sepolia handshake
- Rate limit + replay + audit bindings on the target Worker
- hermitian-audit + trace-consent post-deploy

## Next command that unblocks live deploy
Provide `X402_PAY_TO` (0x…) and confirm sepolia vs mainnet. Then a single-pass AAL deploy can attach this catalog to `ambient-mcp-server` or a new `gc-x402-mcp` Worker without overwriting AAL auth.
