/**
 * File: OwnershipPanel.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Shows user's fractional ownership details for the current asset.
 *              Calculates and displays token balance, ownership percentage, and asset valuation.
 *              Data retrieved from token-service and fraction-service.
 */

import React from 'react';

const OwnershipPanel = ({ ownership, asset }) => {
  const ownershipPercentage = ((ownership.balance / asset.totalSupply) * 100).toFixed(4);
  const assetValuation = (asset.totalValue * (ownership.balance / asset.totalSupply)).toFixed(2);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Your Ownership</h2>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4 border border-purple-500/20">
          <p className="text-slate-400 text-sm mb-1">Token Balance</p>
          <p className="text-white text-3xl font-bold">{ownership.balance.toLocaleString()}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Ownership %</p>
            <p className="text-purple-400 text-xl font-bold">{ownershipPercentage}%</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Asset Value</p>
            <p className="text-green-400 text-xl font-bold">${parseFloat(assetValuation).toLocaleString()}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-700">
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(parseFloat(ownershipPercentage), 100)}%` }}
            />
          </div>
          <p className="text-slate-400 text-xs mt-2 text-center">
            Ownership Visualization
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnershipPanel;