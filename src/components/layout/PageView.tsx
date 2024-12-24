import React from 'react';
//Styles
import '../../styles/shared.css';
//Components
import Header from './Header';
import Footer from './Footer';


export default function PageView({children}:any):JSX.Element {
  return (
  <div className="page-wrapper">
    <Header/>
    <main className='page-wrapper--content'>
    {children}
    </main>
    <Footer/>
   </div>
  )
}
