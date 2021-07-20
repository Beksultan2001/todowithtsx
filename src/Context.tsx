
import React,{createContext,useState,useContext,useEffect} from 'react';


type test = {
    status: boolean
}

const AppContext = createContext<test>({status: false});


const AppProvider: React.FC = ({children}) =>{

    
    const [status, setStatus] = useState<test>({status: false})

    return (
        <AppContext.Provider value = {status}>
            {children}
        </AppContext.Provider>
    )

    
};

export const useGlobalContext = () => {

    return useContext(AppContext)

  }
  
  export { AppContext, AppProvider }
