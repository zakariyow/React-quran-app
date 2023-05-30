import { useState } from "react"

const Surah = ({chapters, chapterHendler}) => {
  const [activeId, setActiveId] =useState('')
  return (
    <div className="min-vh-100 shadow-lg p-2 bg-red">
      <h1 className="fs-5 fw-bold text-center">Chapters</h1> <hr />
        <ul className="list-group text-end">
          {
          chapters && chapters.length > 
              0 ? 
              chapters.map((chapter) => (
              <div key={chapter.id}>
                <li 
                onClick={(e) =>{
                  chapterHendler(chapter)
                  setActiveId(chapter.id)
                }} className={`  bg-transparent border-0 text-align py-0 d-flex
                  justify-content-between curser fs-6 ${
                    activeId === chapter.id && 'active'
                  }`}>
                    <span span>{chapter.id}</span>
                    <span>{chapter.name_arabic}</span>{' '}                
                  </li>
                <hr />
              </div>
              )) : (
                <button class="btn btn-light" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="visually-hidden">Loading...</span>
                </button>
              )
          }
        </ul>
    </div>
  )
}

export default Surah