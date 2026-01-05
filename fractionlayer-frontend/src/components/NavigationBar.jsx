/**
 * File: NavigationBar.jsx
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 * Description: Top navigation bar displaying app branding and connected wallet address.
 *              Shows shortened wallet address for UX clarity.
 */

import React from 'react';

const NavigationBar = ({ walletAddress }) => {
  const shortenAddress = (addr) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">FL</span>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">FractionLayer</h1>
            <p className="text-slate-400 text-xs">Security Token Demo</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-slate-300 text-sm font-mono">
            {shortenAddress(walletAddress)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;