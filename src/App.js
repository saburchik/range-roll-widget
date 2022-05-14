import { useEffect, useRef, useState } from 'react';
import './App.scss';

const App = () => {
  const [inputValue, setInputValue] = useState(1)
  const [smoothScroll, setSmoothScroll] = useState('none')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')

  const screen = useRef()
  const [height, setHeight] = useState(0)

  console.log('before', height);

  useEffect(() => {
    setHeight(screen.current.clientHeight)
  })

  console.log('after', height);

  const handleValue = (e) => {
    let activeRangeIndex = e.currentTarget.value
    setInputValue(activeRangeIndex)

    const active = ' active'
    activeRangeIndex === '1' ? setImg1(active) || setSmoothScroll(`translateY(-${0 * height}px)`) : setImg1('')
    activeRangeIndex === '2' ? setImg2(active) || setSmoothScroll(`translateY(-${1 * height}px)`) : setImg2('')
    activeRangeIndex === '3' ? setImg3(active) || setSmoothScroll(`translateY(-${2 * height}px)`) : setImg3('')
    activeRangeIndex === '4' ? setImg4(active) || setSmoothScroll(`translateY(-${3 * height}px)`) : setImg4('')
  }

  return (
    <div className="app" ref={screen}>
      <nav className="app__navigation">
        <ul className="nav__items">
          <li><button className="nav__btn active">Image 1</button></li>
          <li><button className="nav__btn">Image 2</button></li>
          <li><button className="nav__btn">Image 3</button></li>
          <li><button className="nav__btn">Image 4</button></li>
        </ul>
        <label className="nav__range">
          <input className="input-range" type="range" min="1" max="4" defaultValue={inputValue} onChange={handleValue} />
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
