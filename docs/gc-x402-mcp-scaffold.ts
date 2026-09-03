/**
 * Genesis Conductor — x402 paidTool scaffold
 * Target: Cloudflare Worker / Agents SDK (AAL-compatible)
 * Status: source only — do not deploy until X402_PAY_TO + auth gates are set
 */

export const X402_CONFIG = {
  network: "eip155:84532",
  facilitator: "https://x402.org/facilitator",
  payTo: process.env.X402_PAY_TO ?? "REPLACE_WITH_TREASURY_ADDRESS",
};

export const PAID_TOOLS = [
  { name: "ebm_energy", description: "Compute E_theta(d) = ||phi_theta(d)||^2 and unnormalized log-probability.", priceUsd: 0.10 },
  { name: "registry_query", description: "Query Genesis Conductor skill/agent catalog by name or category.", priceUsd: 0.05 },
  { name: "market_brief", description: "Sourced market brief for a product and region. Returns range, not a single TAM.", priceUsd: 15.0 },
  { name: "propensity_score", description: "Transparent 0-100 propensity scorecard for convert-to-paid within 90 days.", priceUsd: 1.0 },
] as const;

export function ebmEnergy(d: number[]): { energy: number; logUnnorm: number } {
  const energy = d.reduce((acc, x) => acc + x * x, 0);
  return { energy, logUnnorm: -energy };
}

export function propensityScorecard(): { score: number; band: string } {
  return { score: 75, band: "high-mid" };
}
