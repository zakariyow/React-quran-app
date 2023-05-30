 import ReactPlayer from 'react-player'

 const Players = ({reciterDetail, chapterDetail}) => {
  const audioLink = (reciter, number) =>{
    return reciter + '/' + ('00' + number).slice(-3) + '.mp3'
  }
  return (
    <div className="min-vh-100 shadow-lg p-2 bg-red">
    <h1 className="fs-5 fw-bold text-center">Player</h1> <hr />
    {reciterDetail !== null && chapterDetail !== null ? (
      <ul className="list-group text-end">
      <div>
        <li className="bg-transparent border-0 text-align py-0 curser fs-6 ps-0 abs
            d-flex justify-content-between ">
              <span>Reciter</span>
            <span className="fs-6">{reciterDetail.name}</span>
          </li>
          <hr />
        <li className="bg-transparent border-0 text-align py-0 curser fs-6 ps-0 abs
            d-flex justify-content-between ">
              <span>Chapters in Arabic</span>
            <span className="fs-6">{chapterDetail.name_arabic}</span>
          </li>
          <hr />
        <li className="bg-transparent border-0 text-align py-0 curser fs-6 ps-0 abs
            d-flex justify-content-between ">
              <span>Chapters in Eng:</span>
            <span className="fs-6">{chapterDetail.name_complex}</span>
          </li>
          <hr />
        <li className="bg-transparent border-0 text-align py-0 curser fs-6 ps-0 abs
            d-flex justify-content-between ">
              <span>Revelation Place:</span>
            <span className="fs-6">{chapterDetail.revelation_place}</span>
          </li>
          <hr />
        <li className="bg-transparent border-0 text-align py-0 curser fs-6 ps-0 abs
            d-flex justify-content-between ">
              <span>Translated Name:</span>
            <span className="fs-6">{chapterDetail.translated_name.name}</span>
          </li>
          <hr />
          <div>
            <ReactPlayer
              url={
                audioLink(reciterDetail.Server, chapterDetail.id)
              }
              controls={true}
              playing={true}
              width='100%'
              height='60px'
            />
          </div>
      </div>
    </ul>
    ):(
      <button class="btn btn-light" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="visually-hidden">Loading...</span>
    </button>
    )}
  </div>
  )
}

export default Players