import React from 'react'



function Landingpage(){
    return(
        <header className='navbar-container'>
            <nav>
            <div className='logo-div'>
            <img src={ require('./images/logo.svg') } alt='shortly logo' />
        </div>
        <a href='#'>Features</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resources</a>

        
</nav>
</header>
    )
}