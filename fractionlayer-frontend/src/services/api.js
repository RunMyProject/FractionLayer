/**
 * File: api.js
 * Author: Edoardo Sabatini
 * Date: 06-01-2026
 * Project: FractionLayer
 * Description: Axios-like wrapper around fetch for all micro-services.
 *              Base URL injected via env, auto-serializes JSON.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const config = { ...options, headers };
  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const res = await fetch(url, config);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export const assetService = {
  list: () => request('/assets'),
  get: (id) => request(`/assets/${id}`),
};

export const tokenService = {
  mint: (body) => request('/tokens/mint', { method: 'POST', body }),
  transfer: (body) => request('/tokens/transfer', { method: 'POST', body }),
};

export const ledgerService = {
  txs: (assetId) => request(`/ledger/${assetId}/transactions`),
};