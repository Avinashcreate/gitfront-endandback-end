import {  createContext,useState } from "react";
export const UseRegContext = createContext()

export const UserProvider = ({children})=>{
const[saveReg,setSave] = useState(null);
const[savePlanet,savePlans] = useState(null);
const SaveUserReg = (saveData)=>{
    setSave(saveData)
    console.log("Save data in useContext")
 }
        const SavePlanned = (plan)=>{
        savePlans(plan)
        console.log("Save Payment in UseContent ")
}
const CompleteData  = ()=>{
    const UserRegform = {
        ...saveReg,
        plan:savePlanet,
    };
    return UserRegform
}


return(
    <UseRegContext.Provider value={{saveReg,SaveUserReg, SavePlanned,CompleteData}}>
        {children}
    </UseRegContext.Provider>
);
}