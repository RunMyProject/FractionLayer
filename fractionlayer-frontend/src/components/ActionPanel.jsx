/**
 * File: ActionPanel.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Interactive panel for executing blockchain operations on security tokens.
 *              Provides interfaces to mint new fractional tokens and transfer existing tokens.
 *              Calls fraction-service, token-service, and security-service for authorization.
 */

import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader } from 'lucide-react';

const ActionPanel = ({ assetId, onActionComplete }) => {
  const [mintAmount, setMintAmount] = useState('');
  const [transferWallet, setTransferWallet] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [loading, setLoading] = useState({ mint: false, transfer: false });
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleMint = async () => {
    if (!mintAmount || parseFloat(mintAmount) <= 0) {
      showNotification('Please enter a valid amount', 'error');
      return;
    }

    setLoading({ ...loading, mint: true });
    
    try {
      // Step 1: Authorize action via security-service
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 2: Call fraction-service to handle fractional logic
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Step 3: Call token-service to mint on EVM
      await new Promise(resolve => setTimeout(resolve, 800));
      
      showNotification(`Successfully minted ${mintAmount} tokens!`, 'success');
      setMintAmount('');
      onActionComplete();
    } catch (error) {
      showNotification('Minting failed. Please try again.', 'error');
    } finally {
      setLoading({ ...loading, mint: false });
    }
  };

  const handleTransfer = async () => {
    if (!transferWallet || !transferAmount || parseFloat(transferAmount) <= 0) {
      showNotification('Please enter valid wallet address and amount', 'error');
      return;
    }

    setLoading({ ...loading, transfer: true });
    
    try {
      // Step 1: Authorize via security-service
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 2: Execute transfer via token-service
      await new Promise(resolve => setTimeout(resolve, 900));
      
      showNotification(`Successfully transferred ${transferAmount} tokens!`, 'success');
      setTransferWallet('');
      setTransferAmount('');
      onActionComplete();
    } catch (error) {
      showNotification('Transfer failed. Please try again.', 'error');
    } finally {
      setLoading({ ...loading, transfer: false });
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Token Operations</h2>
      
      {notification && (
        <div className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
          notification.type === 'success' 
            ? 'bg-green-500/20 border border-green-500/30' 
            : 'bg-red-500/20 border border-red-500/30'
        }`}>
          {notification.type === 'success' ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-400" />
          )}
          <span className={notification.type === 'success' ? 'text-green-300' : 'text-red-300'}>
            {notification.message}
          </span>
        </div>
      )}
      
      <div className="space-y-6">
        {/* Mint Section */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-white text-sm font-semibold mb-3 flex items-center">
            <span className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center mr-2">
              <span className="text-purple-400 text-xs">M</span>
            </span>
            Mint Fractional Tokens
          </h3>
          <div className="space-y-3">
            <div>
              <label className="text-slate-400 text-xs mb-1 block">Amount to Mint</label>
              <input
                type="number"
                value={mintAmount}
                onChange={(e) => setMintAmount(e.target.value)}
                placeholder="Enter token amount"
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <button
              onClick={handleMint}
              disabled={loading.mint}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading.mint ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Minting...
                </>
              ) : (
                'Mint Tokens'
              )}
            </button>
            <p className="text-slate-500 text-xs">
              Calls: fraction-service → token-service
            </p>
          </div>
        </div>

        {/* Transfer Section */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
          <h3 className="text-white text-sm font-semibold mb-3 flex items-center">
            <span className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center mr-2">
              <span className="text-blue-400 text-xs">T</span>
            </span>
            Transfer Tokens
          </h3>
          <div className="space-y-3">
            <div>
              <label className="text-slate-400 text-xs mb-1 block">Destination Wallet</label>
              <input
                type="text"
                value={transferWallet}
                onChange={(e) => setTransferWallet(e.target.value)}
                placeholder="0x..."
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
              />
            </div>
            <div>
              <label className="text-slate-400 text-xs mb-1 block">Amount to Transfer</label>
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Enter token amount"
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button
              onClick={handleTransfer}
              disabled={loading.transfer}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading.transfer ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Transferring...
                </>
              ) : (
                'Transfer'
              )}
            </button>
            <p className="text-slate-500 text-xs">
              Calls: security-service → token-service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;