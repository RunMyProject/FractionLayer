/**
 * File: TransactionModal.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Modal component displaying detailed transaction information.
 *              Shows complete transaction data from ledger-service including timestamps,
 *              gas fees, and direct link to blockchain explorer (Etherscan).
 */

import React from 'react';

const TransactionModal = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-2xl w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white text-xl font-bold">Transaction Details</h3>
            <p className="text-slate-400 text-sm mt-1">Ledger Service Record</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Transaction Type</p>
              <p className="text-white font-medium capitalize">{transaction.type}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Status</p>
              <p className="text-green-400 font-medium capitalize">{transaction.status}</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-xs mb-1">Transaction Hash</p>
            <p className="text-white font-mono text-sm break-all">{transaction.txHash}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Amount</p>
              <p className="text-white font-bold text-lg">{transaction.amount.toLocaleString()} Tokens</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Timestamp</p>
              <p className="text-white font-medium">{new Date(transaction.timestamp).toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-xs mb-1">From</p>
            <p className="text-white font-mono text-sm">{transaction.from}</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-xs mb-1">To</p>
            <p className="text-white font-mono text-sm">{transaction.to}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Block Number</p>
              <p className="text-white font-medium">{transaction.blockNumber}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1">Gas Used</p>
              <p className="text-white font-medium">{transaction.gasUsed}</p>
            </div>
          </div>

          <a
            href={`https://etherscan.io/tx/${transaction.txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all text-center"
          >
            View on Etherscan →
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;