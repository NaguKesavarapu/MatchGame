import './index.css'

const FaqItem = props => {
    const {imageDetails, clickThumbnailImage} = props 
    const {id,thumbnailUrl} = imageDetails

    const onClickImg = () => {
        clickThumbnailImage(id)
    }

    return(
        <li className="list-item">
            <img src={thumbnailUrl} onClick={onClickImg} className="img" alt="img"/>
        </li>
    )
}

export default FaqItem