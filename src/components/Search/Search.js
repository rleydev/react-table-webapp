import './Search.scss'
import searchLogo from '../../assets/search-svgrepo-com 1.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useActions } from '../../services/useActions'

const Search = () => {
 

    return(
        <article className="search-sec">
            <input
                className='search-sec__input'
                type="search"
                placeholder="Поиск"
               
                />
            <img src={searchLogo} alt='search' className='search-sec__logo' />
        </article>
    )
}

export default Search