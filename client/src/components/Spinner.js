import React from 'react'
export default function Spinner() {
     return (
         <div className="my-5 mx-auto d-flex justify-content-center">
           <div className="spinner-border text-primary" role="status">
             <span className="sr-only">Loading...</span>
           </div>
         </div>
     );
}
