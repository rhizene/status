import { createContext, useState } from 'react';


export const SectionTitleContext = createContext(null);

export const SectionTitleProvider = ({children}) => {
      const [sectionTitle, setSectionTitle] = useState('');
      return <SectionTitleContext.Provider value = {[sectionTitle, setSectionTitle]}>
            {children}
      </SectionTitleContext.Provider>
}
