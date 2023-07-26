import rowImage from '../../assets/Group 1.png'
import './RowImage.scss'

const RowImage = () => {
    return(
        <div>
            <img src={rowImage} alt='row' className='rowImg' />
        </div>
    )
}

export default RowImage