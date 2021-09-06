import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme,setTheme]=useState('light-theme');

  useEffect(()=>{
    document.documentElement.className=theme;

  },[theme])
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(theme==="light-theme"){
      setTheme("dark-theme")
    }
    else{
      setTheme("light-theme")
    }

  }
  return <main>
    <nav>
      <div className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={handleSubmit} >Toggle</button>
      </div>
    </nav>
    <article className="articles">
      {data.map((item)=>{
        return <Article key={item.id} {...item} ></Article>
      })}
    </article>
  </main>
}

export default App
