import bee from '../images/bee.jpg'
import elk from '../images/elk.jpg'
import frog from '../images/frog.jpeg'
import owl from '../images/owl.jpeg'
import rick from '../images/rick.jpeg'
import fairy from '../images/fairy.jpeg'
import Draggable from './Draggable'

export default function InteractiveEasel() {
  const artList = [bee, elk, frog, owl, rick, fairy]
  return (
    <>
      <Draggable images={artList} />
    </>
  )
}
