import React, { useEffect } from 'react'

export const ChatIA = () => {  

    useEffect(() => {
       
        const textArea = document.querySelector("textarea");

        console.log(textArea);
        
      return () => {
        
      }
    }, [])
    
    return (
  <>
  <h1>Porro</h1>
  <iframe 
  src="https://studio.pickaxe.co/_embed/YL4TIUHG61?d=deployment-0a295aa2-187c-4ebe-bc13-96ed0c343eb8" 
  // style={`width: 100%; height: 500px; max-width: 700px; border-radius: 4px;`} 
  className="w-100 h-[500px] mx-auto" 
  >
   </iframe>
  
  </>
    
  )
}
