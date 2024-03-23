'use client';
import { createContext, useEffect, useState } from 'react';

const AppDataContext = createContext({state: {} as any, actions: {} as any});
export default function AppDataProvider({ children }: any) {
    const [appData, setAppData] = useState({} as any);

    const value = {
      state: { appData },
      actions: { setAppData },
    };
  
    useEffect(() => {
      setAppData({currentBubble: -1, limit: 0})
    },[]);
    return (
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
  )
};

export { AppDataProvider, AppDataContext };

