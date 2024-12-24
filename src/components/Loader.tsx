import React from 'react';
import '../styles/loader.css';

export default function Loader():JSX.Element {
  return (
    <div>
       <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
       <div><h2>Data is loading...</h2></div>
    </div>
  )
}
