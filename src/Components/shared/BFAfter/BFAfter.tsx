import './BFAfter.css'
interface BFAfterProps{
    image:string;
    imageAlt:string;
}
const BFAfter = ({image,imageAlt}:BFAfterProps) => {
  return (
    <div className='BFAfter'>
        <img src={image} alt={imageAlt} />
    </div>
  )
}

export default BFAfter