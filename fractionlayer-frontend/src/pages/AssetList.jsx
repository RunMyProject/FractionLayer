/**
 * File: AssetList.jsx
 * Author: Edoardo Sabatini
 * Date: 06-01-2026
 * Project: FractionLayer
 * Description: Catalog view for browsing all tokenized real-world assets.
 *              Fetches list from asset-service, supports search/filter.
 */

import React, { useEffect, useState } from 'react';

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: call asset-service /assets endpoint
    setTimeout(() => {
      setAssets([]);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) return <p className="text-slate-400">Loading assets...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Asset Catalog</h1>
      {/* map assets -> cards */}
      {assets.length === 0 && (
        <p className="text-slate-500">No assets available.</p>
      )}
    </div>
  );
};

export default AssetList;
