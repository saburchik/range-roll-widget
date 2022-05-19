// == Base:
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { IMainState } from './types'
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
    const active: string = ' active'
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

  const mainState: IMainState[] = [
    { id: 1, classActive: img1, title: "Page №1" },
    { id: 2, classActive: img2, title: "Page №2" },
    { id: 3, classActive: img3, title: "Page №3" },
    { id: 4, classActive: img4, title: "Page №4" },
  ]

  return (
    <div className="app" ref={screen} >
      <nav className="app__navigation">
        <ul className="nav__items">
          {mainState.map(s => (
            <li key={s.id}>
              <button
                className={"nav__btn" + s.classActive}
                onClick={() => toggleValue(Number(s.id))}
                data-testid={"btn" + s.id}
              >{s.title}</button>
            </li>
          ))}
        </ul>
        <label className="nav__range">
          <input type="range" min="1" max="4"
            className="input__range"
            value={inputValue}
            onChange={(e) => toggleValue(Number(e.currentTarget.value))}
            data-testid="range"
          />
        </label>
      </nav>
      <ul className="range__pages" style={{ transform: smoothScroll }}>
        {mainState.map(s => <li key={s.id} className={"page" + s.id + s.classActive} />)}
      </ul>
    </div>
  )
}

export default App