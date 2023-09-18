import React, { useEffect, useState } from 'react'
import style from './assets/style.module.css'
import memesData from '../../memesData'
export default function Meme() {
  const [memeIndex, setMemeIndex] = useState(0)
  const [allMemes] = useState(memesData)
  const [displayedMemes, setDisplayedMemes] = useState([])
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [textPosition, setTextPosition] = useState({ top: 0, left: 0 })
  const onDragStart = (e, textElement) => {
    e.dataTransfer.setData('textElement', textElement)
  }

  // Function to handle the end of dragging
  const onDragEnd = () => {
    // Update the text position in state based on the new coordinates
    // You'll need to implement this part
  }
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
            <input
              className={style.formInput1}
              placeholder="Top text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              name="topText"
            />
            <input
              className={style.formInput2}
              placeholder="Bottom text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              name="bottomText"
            />
          </div>
          <button className={style.formButton} onClick={getMemeImage}>
            Get a new meme image
          </button>
          <div className={style.container}>
            <img
              src={currentMemeUrl}
              alt="Random Meme"
              className={style.randomImage}
            />
            <h2
              className={style.memeTopText}
              draggable="true"
              onDragStart={(e) => onDragStart(e, 'topText')}
              onDragEnd={onDragEnd}
            >
              {topText}
            </h2>
            <h2
              className={style.memeBottomText}
              draggable="true"
              onDragStart={(e) => onDragStart(e, 'topText')}
              onDragEnd={onDragEnd}
            >
              {bottomText}
            </h2>
          </div>
        </form>
      </main>
    </>
  )
}
