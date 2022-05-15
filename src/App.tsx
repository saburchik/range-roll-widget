import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  const [inputValue, setInputValue] = useState(1)
  const [smoothScroll, setSmoothScroll] = useState<string>('none')
  const [height, setHeight] = useState(0)
  const [img1, setImg1] = useState<string>(' active')
  const [img2, setImg2] = useState<string>('')
  const [img3, setImg3] = useState<string>('')
  const [img4, setImg4] = useState<string>('')
  const currentRange = useRef(null)
  const screen = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setHeight(screen.current!.clientHeight)
  })

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let activeRangeIndex = Number(e.currentTarget.value)
    setInputValue(activeRangeIndex)
    return rangeIndex(activeRangeIndex)
  }

  const rangeIndex = (activeRangeIndex: number) => {
    const active = ' active'

    // == CASE 1:
    if (activeRangeIndex === 1) {
      setImg1(active)
      setSmoothScroll(`translateY(-${0 * height}px)`)
    } else {
      setImg1('')
    }
    // == CASE 2:
    if (activeRangeIndex === 2) {
      setImg2(active)
      setSmoothScroll(`translateY(-${1 * height}px)`)
    } else {
      setImg2('')
    }
    // == CASE 3:
    if (activeRangeIndex === 3) {
      setImg3(active)
      setSmoothScroll(`translateY(-${2 * height}px)`)
    } else {
      setImg3('')
    }
    // == CASE 4:
    if (activeRangeIndex === 4) {
      setImg4(active)
      setSmoothScroll(`translateY(-${3 * height}px)`)
    } else {
      setImg4('')
    }
  }

  const toggleBtn = (activeRangeIndex: number) => {
    currentRange.current!.value = activeRangeIndex
    setInputValue(activeRangeIndex)

    return rangeIndex(activeRangeIndex)
  }

  return (
    <div className="app" ref={screen}>
      <Navbar />
      <nav className="app__navigation">
        <ul className="nav__items">
          <li><button className={"nav__btn" + img1} onClick={() => toggleBtn(1)}>Page №1</button></li>
          <li><button className={"nav__btn" + img2} onClick={() => toggleBtn(2)}>Page №2</button></li>
          <li><button className={"nav__btn" + img3} onClick={() => toggleBtn(3)}>Page №3</button></li>
          <li><button className={"nav__btn" + img4} onClick={() => toggleBtn(4)}>Page №4</button></li>
        </ul>
        <label className="nav__range">
          <input type="range" min="1" max="4"
            className="input-range"
            defaultValue={inputValue}
            ref={currentRange}
            onChange={handleValue} />
        </label>
      </nav>
      <ul className="range__items" style={{ transform: smoothScroll }}>
        <li className={"img1" + img1} />
        <li className={"img2" + img2} />
        <li className={"img3" + img3} />
        <li className={"img4" + img4} />
      </ul>
    </div>
  )
}

export default App
