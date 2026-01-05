/**
 * File: DeveloperView.jsx
 * Author: Edoardo Sabatini
 * Date: 06-01-2026
 * Project: FractionLayer
 * Description: Technical dashboard for debugging.
 *              Displays raw API responses, env info, logs.
 */

// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';

const DeveloperView = () => {
  // const [env, setEnv] = useState({});

  useEffect(() => {
    // This effect will run once when the component mounts
    /*
    const newEnv = {
      viteMode: import.meta.env.MODE,
      buildTime: new Date().toISOString(),
    };
    */
    // Use the functional update form of setEnv
    /*
    setEnv(prevEnv => ({
      ...prevEnv,
      ...newEnv
    }));
    */
  }, []);

  return (
    <div className="p-6 font-mono text-sm text-slate-300">
      <h1 className="text-xl font-bold text-white mb-4">Developer Debug</h1>
      <pre className="bg-slate-900 p-4 rounded">
        {/* JSON.stringify(env, null, 2) */}
      </pre>
    </div>
  );
};

export default DeveloperView;