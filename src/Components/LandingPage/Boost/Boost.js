import React from 'react'
import boostimg from '../../../images/bg-boost-desktop.svg'
import HeroSectionButton from '../HeroSection/HeroSectionButton'
import styled from 'styled-components'


const Booost = styled.div`
    .boost-container{
        width:100%;
        height:249px;
        background-color: #282c34;
    }
    .boost-img{
        width:100%;
    }
    .boost-img img{
        width:100%;
        background-size: cover;
    }
    .boost-details{
        margin-top:-224px
    }
    .boost-h3 h3{
        font-size:35px;
        color:white;
    }
`
const Boost = () => {
    return (
        <Booost>
        <div className='boost-container'>
            <div className='boost-img'>
            <img src={boostimg} alt ="bg-img" />
            <div className='boost-details'>
            <div className='boost-h3'>
            <h3>Boost your links today</h3>
        </div>

        <div className='boost-button'>
            <HeroSectionButton />
            </div>
</div>
        </div>
    </div>
    </Booost>
    )
}
export default Boost