import { useEffect, useState } from "react"
import axios from "axios"
import Qaariga from "./Qaariga"
import Surah from "./Surah"
import Players from "./Players"

const Homescr = () => {
  const [reciters, setReciters] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [reciterDetail, setReciterDetail] = useState(null)
  const [chapterDetail, setChapterDetail] = useState(null)

  // get all reciters with audio
  useEffect(() => {
    async function fetchDate() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`)
      setReciters(reciters)
    }
    fetchDate()
  },[])

  // get all chapters
  useEffect(() =>{
    async function fatchDate(){
      const { data: chapters} = await axios.get(
          `https://api.quran.com/api/v4/chapters`
          )
          setChapters(chapters)
      }
      reciters && reciters.length > 0 && fatchDate()
    },[reciters])
  const reciterHandler = (reciter) =>{
     setReciterDetail(reciter)
  }
  const chapterHendler = (chapter) =>{
     setChapterDetail(chapter)
  }
  return (
    <div className="row p-5 hame-body vh-100 sub-bg">
      <h1 class="fs-2 text-center text-light fw-bold quran-app">Quran App </h1>
      <div className="col-lg-4 col-mt-4 col-sm-12 scroll">
        <Qaariga 
          reciters={reciters} 
          reciterHandler={reciterHandler} 
        />
      </div> 
      <div className="col-lg-4 col-mt-4 col-sm-12 scroll ">
        <Surah 
          chapters={chapters && chapters.chapters}
          chapterHendler={chapterHendler}
          />
      </div> 
      <div className="col-lg-4 col-mt-4 col-sm-12 scroll ">
        <Players reciterDetail={reciterDetail} chapterDetail={chapterDetail}/>
      </div> 
    </div>
  )
}

export default Homescr