import React, { useLayoutEffect, useState } from 'react';
import '../../styles/layout.css'
// Redux
import useBurgerState from '../../services/hooks/useBurgerState';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setBurger } from '../../redux/appStore';

export default function Header() {

  const burger = useBurgerState();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const dispatch = useCommonDispatch();

  useLayoutEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <header className='header'>
      <a href='/' className='header--logo'>
        <img src="./main.png" alt="main photo" />
      </a>
      <nav className='header--links'>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">People</a>
        <a href="#">More</a>
      </nav>
      { (screenWidth<=650 || screenHeight<=800) && <button onClick={() => dispatch(setBurger(!burger))}  className='header--search-burger'><img src="/burger.png" alt="burger logo" /></button> }
    </header>
  )
}
