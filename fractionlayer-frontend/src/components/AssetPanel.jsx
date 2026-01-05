/**
 * File: AssetPanel.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Displays detailed information about the selected tokenized real-world asset.
 *              Shows asset metadata including name, type, valuation, and token supply.
 *              Data fetched from asset-service microservice.
 */

import React from 'react';

const AssetPanel = ({ asset }) => {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-semibold">Asset Information</h2>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
          RWA TOKEN
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-slate-400 text-sm mb-1">Asset Name</p>
          <p className="text-white text-xl font-bold">{asset.name}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-slate-400 text-sm mb-1">Asset Type</p>
            <p className="text-white font-medium">{asset.type}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Total Value</p>
            <p className="text-white font-medium">${asset.totalValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Token Supply</p>
            <p className="text-white font-medium">{asset.totalSupply.toLocaleString()}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-xs">Contract Address</p>
          <p className="text-slate-300 text-sm font-mono mt-1">{asset.contractAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default AssetPanel;