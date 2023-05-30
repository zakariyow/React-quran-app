import { useState } from "react"

const Qaariga = ({reciters, reciterHandler}) => {
  const [activeId, setActiveId] = useState('')
  return (
    <div className="min-vh-100 shadow-lg p-2 bg-red">
    <h1 className="fs-5 fw-bold text-center">Reciters</h1> <hr />
    <ul className=" list-group text-start">
    {reciters && reciters.length > 0 ? (
      reciters.map(reciter =>(
        <div key={reciter.id}>
          <li 
            onClick={(e) => {
              reciterHandler(reciter) 
              setActiveId(reciter.id)
            }} 
            className={`bg-transparent border-0 text-align py-0 curser fs-6 ps-0 ${ 
              reciter.id === activeId && 'active'
            }`}
            >
              <span className="">{reciter.name}</span>
            </li>
            <hr />
        </div>
      ))
    ): (
    <button class="btn btn-light" type="button" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span class="visually-hidden">Loading...</span>
    </button>
    )}
      </ul>
  </div>
  )
}

export default Qaariga