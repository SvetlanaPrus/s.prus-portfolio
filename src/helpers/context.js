import { createContext, useContext } from 'react';

const SectionContext = createContext(null);
const useSection = () => useContext(SectionContext);

export { SectionContext, useSection };
