/**
 * File: TransactionHistory.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Displays scrollable transaction history with filtering and detail modal.
 *              Shows transactions from ledger-service with real-time status updates.
 *              Clicking a transaction opens detailed view with blockchain explorer link.
 */

import React from 'react';

const TransactionHistory = ({ transactions, onTransactionClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'pending': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'failed': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-slate-400 bg-slate-400/20 border-slate-400/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'mint': return 'M';
      case 'transfer': return 'T';
      case 'burn': return 'B';
      default: return '?';
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Transaction History</h2>
      
      <div className="overflow-auto max-h-96">
        <table className="w-full">
          <thead className="border-b border-slate-700 sticky top-0 bg-slate-800">
            <tr>
              <th className="text-left text-slate-400 text-xs font-medium pb-3 pr-4">Type</th>
              <th className="text-left text-slate-400 text-xs font-medium pb-3 pr-4">Amount</th>
              <th className="text-left text-slate-400 text-xs font-medium pb-3 pr-4">Tx Hash</th>
              <th className="text-left text-slate-400 text-xs font-medium pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={tx.id}
                onClick={() => onTransactionClick(tx)}
                className="border-b border-slate-700/50 hover:bg-slate-700/30 cursor-pointer transition-colors"
              >
                <td className="py-3 pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center text-blue-400 text-xs font-bold">
                      {getTypeIcon(tx.type)}
                    </span>
                    <span className="text-white text-sm capitalize">{tx.type}</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-white font-medium">{tx.amount.toLocaleString()}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-slate-300 font-mono text-xs">
                    {tx.txHash.slice(0, 10)}...{tx.txHash.slice(-8)}
                  </span>
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {transactions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-500">No transactions yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;