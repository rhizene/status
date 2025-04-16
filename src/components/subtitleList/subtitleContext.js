import { createContext, useState } from 'react';


export const SubtitleContext = createContext(null);

export const SubtitleProvider = ({children}) => {
      const [subtitle, setSubtitle] = useState('');
      return <SubtitleContext.Provider value = {[subtitle, setSubtitle]}>
            {children}
      </SubtitleContext.Provider>
}
