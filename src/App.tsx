// == Base:
import React from 'react'
import { useEffect, useRef, useState } from 'react'
// == Styles:
import './App.scss'
// == Components:

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1)
  const [smoothScroll, setSmoothScroll] = useState<string>('none')
  const [height, setHeight] = useState<number>(0)
  const [img1, setImg1] = useState<string>(' active')
  const [img2, setImg2] = useState<string>('')
  const [img3, setImg3] = useState<string>('')
  const [img4, setImg4] = useState<string>('')
  const screen = useRef<HTMLDivElement | null>(null)

  // eslint-disable-next-line 
  useEffect(() => {
    setHeight(screen.current!.clientHeight);
  })

  const toggleValue = (activeRangeIndex: number) => {
    setInputValue(activeRangeIndex)
    rangeIndex(activeRangeIndex)
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

  return (
    <div className="app" ref={screen} >
      <nav className="app__navigation">
        <ul className="nav__items">
          <li><button className={"nav__btn" + img1} onClick={() => toggleValue(Number(1))}>Page №1</button></li>
          <li><button className={"nav__btn" + img2} onClick={() => toggleValue(Number(2))}>Page №2</button></li>
          <li><button className={"nav__btn" + img3} onClick={() => toggleValue(Number(3))}>Page №3</button></li>
          <li><button className={"nav__btn" + img4} onClick={() => toggleValue(Number(4))}>Page №4</button></li>
        </ul>
        <label className="nav__range">
          <input type="range" min="1" max="4"
            className="input__range"
            value={inputValue}
            onChange={(e) => toggleValue(Number(e.currentTarget.value))}
          />
        </label>
      </nav>
      <ul className="range__pages" style={{ transform: smoothScroll }}>
        <li className={"img1" + img1} />
        <li className={"img2" + img2} />
        <li className={"img3" + img3} />
        <li className={"img4" + img4} />
      </ul>
    </div>
  )
}

export default App