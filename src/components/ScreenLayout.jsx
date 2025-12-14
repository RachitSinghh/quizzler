import React from 'react';

export default function ScreenLayout({children}) {
  return (
    <div className='screen-layout'>
      <img src="/blob5.png" className='blob top-right' alt="image on the top right corner"/>      
      <img src="/blob6.png" className='blob bottom-left' alt="image on the bottom left corner" /> 
      
      <div className='screen-content'>
      {children}  
      </div>
    </div>
  );
}
