import './BFAfter.css'
interface BFAfterProps{
    image:string;
    imageAlt:string;
}
const BFAfter = ({image,imageAlt}:BFAfterProps) => {
  return (
    <div className='BFAfter'>
        <img src={image} alt={imageAlt}  loading='lazy' />
    </div>
  )
}

export default BFAfter