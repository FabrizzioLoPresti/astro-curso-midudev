import {useState} from 'react'

type Props = {}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <span className="text-yellow-300 text-xl mr-4">{count}</span>
      <button className="border px-4 py-2 text-xl" onClick={() => setCount(count => count + 1)}>+</button>
      <button className="border px-4 py-2 text-xl" onClick={() => setCount(count => count - 1)}>-</button>
    </>
  )
}

export default Counter