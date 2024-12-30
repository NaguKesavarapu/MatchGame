import './index.css'

const Faqs = props => {
    const {tabItem, onClickTabBtn, isActive} = props 
    const {tabId, displayText} = tabItem 

    const btnClassName = isActive ? "btn active-btn" : "btn"

    const onClickTab = () => {
        onClickTabBtn(tabId)
    }

    return(
        <li className="li-item">
            <button type="button" className= {`${btnClassName}`} onClick={onClickTab}>{displayText}</button>
        
        </li>
    )
}

export default Faqs