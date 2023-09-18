import React, { useEffect, useState } from 'react'
import style from './assets/style.module.css'
import memesData from '../../memesData'
export default function Meme() {
  const [memeIndex, setMemeIndex] = useState(0)
  const [allMemes] = useState(memesData)
  const [displayedMemes, setDisplayedMemes] = useState([])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allMemes.data.memes.length)
    setMemeIndex(randomIndex)
  }, [allMemes.data.memes.length])
  function getMemeImage() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * allMemes.data.memes.length)
    } while (newIndex === memeIndex)

    setMemeIndex(newIndex)
  }

  useEffect(() => {
    setDisplayedMemes([...displayedMemes, memeIndex])
  }, [memeIndex])

  const currentMemeUrl = allMemes.data.memes[memeIndex]?.url || ''
  return (
    <>
      <main>
        <form className={style.form}>
          <div className={style.inputs}>
            <input className={style.formInput1} placeholder="Top text" />
            <input className={style.formInput2} placeholder="Bottom text" />
          </div>
          <button className={style.formButton} onClick={getMemeImage}>
            Get a new meme image
          </button>
          <img
            src={currentMemeUrl}
            alt="Random Meme"
            className={style.randomImage}
          />
        </form>
      </main>
    </>
  )
}
