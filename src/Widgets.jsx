import { FiberSmartRecord, Info } from "@material-ui/icons"
import "./Widgets.css"

const Widgets = () => {
    const newsArticle = (heading, subtitle) => 
       ( <div className="widget-article">
            <div className="widget-articleleft">
                <FiberSmartRecord />
            </div>
            <div className="widget-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    
    return (
      <div className="widgets">
        <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <Info />
        </div>

        {newsArticle('Adedoyin is Blazing', 'Top-news - 9999 readers')}
        {newsArticle('Still More cases of Corona in Nigeria', 'Top-news - 30000 readers')}
      </div>
    );
}

export default Widgets
