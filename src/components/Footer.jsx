import React from 'react'
const footerYear= new Date().getFullYear()
function footer() {
    return (
       <footer className = 'footer p-10 bg-gray-700 text-primary content footer-center'>
           <div>

           </div>
        <p>Copyright &copy; {footerYear}</p>
       </footer>
    )
}

export default footer
