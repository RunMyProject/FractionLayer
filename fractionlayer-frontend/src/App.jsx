/**
 * File: App.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Root application component coordinating all UI panels and data flow.
 *              Manages global state and orchestrates API calls to backend microservices.
 *              Implements demo data generation for technical presentation purposes.
 */

import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import AssetPanel from './components/AssetPanel';
import OwnershipPanel from './components/OwnershipPanel';
import ActionPanel from './components/ActionPanel';
import TransactionHistory from './components/TransactionHistory';
import TransactionModal from './components/TransactionModal';

function App() {
  const [asset, setAsset] = useState({
    id: 'asset-001',
    name: 'Milan Commercial Real Estate Portfolio',
    type: 'Real World Asset',
    totalValue: 5000000,
    totalSupply: 1000000,
    contractAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
  });

  const [ownership, setOwnership] = useState({
    balance: 15000,
    walletAddress: '0x8Ba1f109551bD432803012645Ac136ddd64DBA72'
  });

  const [transactions, setTransactions] = useState([
    {
      id: '1',
      type: 'mint',
      amount: 10000,
      txHash: '0x9c5d8e4f7a2b3c1d6e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d',
      status: 'confirmed',
      timestamp: Date.now() - 3600000,
      from: '0x0000000000000000000000000000000000000000',
      to: ownership.walletAddress,
      blockNumber: 18234567,
      gasUsed: 65432
    },
    {
      id: '2',
      type: 'transfer',
      amount: 2500,
      txHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      status: 'confirmed',
      timestamp: Date.now() - 7200000,
      from: ownership.walletAddress,
      to: '0x1234567890123456789012345678901234567890',
      blockNumber: 18234590,
      gasUsed: 52100
    },
    {
      id: '3',
      type: 'mint',
      amount: 5000,
      txHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
      status: 'pending',
      timestamp: Date.now() - 300000,
      from: '0x0000000000000000000000000000000000000000',
      to: ownership.walletAddress,
      blockNumber: 18234612,
      gasUsed: 0
    }
  ]);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Simulate fetching data from microservices on mount
  useEffect(() => {
    console.log('🚀 FractionLayer Demo Initialized');
    console.log('📡 Connected Services: asset-service, fraction-service, token-service, ledger-service, security-service');
  }, []);

  const handleActionComplete = () => {
    // Simulate balance update after minting/transfer
    setOwnership(prev => ({ ...prev, balance: prev.balance + Math.floor(Math.random() * 1000) }));
    
    // Add new transaction to history
    const newTx = {
      id: String(transactions.length + 1),
      type: Math.random() > 0.5 ? 'mint' : 'transfer',
      amount: Math.floor(Math.random() * 5000) + 500,
      txHash: '0x' + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
      status: 'pending',
      timestamp: Date.now(),
      from: ownership.walletAddress,
      to: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
      blockNumber: 18234612 + transactions.length,
      gasUsed: Math.floor(Math.random() * 50000) + 21000
    };
    
    setTransactions(prev => [newTx, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <NavigationBar walletAddress={ownership.walletAddress} />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Asset + Ownership */}
          <div className="lg:col-span-2 space-y-6">
            <AssetPanel asset={asset} />
            <OwnershipPanel ownership={ownership} asset={asset} />
          </div>

          {/* Right Column: Actions */}
          <div>
            <ActionPanel 
              assetId={asset.id} 
              onActionComplete={handleActionComplete} 
            />
          </div>
        </div>

        {/* Full Width: Transaction History */}
        <div className="mt-6">
          <TransactionHistory 
            transactions={transactions}
            onTransactionClick={setSelectedTransaction}
          />
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <TransactionModal 
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}

      {/* Technical Info Footer */}
      <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
        <p className="text-slate-400 text-xs font-mono">
          ⚡ EVM Chain | 🔐 Security Tokens | 🏗️ Go Microservices
        </p>
      </div>
    </div>
  );
}

export default App;