// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardObj} = props
  const {headerText, description, className} = bannerCardObj

  return (
    <li className={`${className} each-banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button" className="button-text">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
