import './Button.scss'

const Button = ({name}) => {
    return (
        <button className='button'>
            {name}
        </button>
    )
}

export default Button