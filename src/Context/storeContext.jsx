import { createContext, useCallback, useEffect, useState } from "react"; 
import { food_list } from "../assets/assets";

export const StoreContext =createContext(null) ;

const  StoreContextProvider=(props)=>{
    
    const [cartitems ,setcartitems] = useState({});

    const addcart = ( itemid)=>{
              if(!cartitems[itemid]){
                setcartitems((prev)=>({...prev,[itemid]:1}))
              }else{
                setcartitems((prev) =>({...prev,[itemid]:prev[itemid]+1}))
              }
    } ;

    const removefromcart = ( itemid)=>{  

      setcartitems( (prev)=>{
            
        const currentQuantity = prev[itemid];

        if(!currentQuantity){
          return prev ;
        } 

        if(currentQuantity>1){
          return { ...prev,[itemid]:currentQuantity-1};
        } 

        const { [itemid] : _,...rest} =prev ;
         
        return rest ;
      })
        
            
    } 

    const  contextValue ={
       food_list  , 
       cartitems ,
       setcartitems ,
       addcart,
       removefromcart
    }  
  

      useEffect(()=>{ 
         console.log(cartitems)
      },[cartitems])
    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider ;