import useIsMobileView from "../../../../../hooks/useIsMobileView";
import useScrollProgress from "../../../../../hooks/useScrollProgressContext";

import './styles/TextContent.css'

const TextContent: React.FC = () => {
  const { isMobileView } = useIsMobileView()
  const { scrollProgress } = useScrollProgress()

  return (
    <div className='textContent' style={{ transform: `translateX(${-scrollProgress * 100}%)` }}>
      {isMobileView
        ? <p> &lt; We are a AI development agency focused on bringing designs, brands, and products to life&nbsp;/&gt; </p>
        : <p> &lt; We are a AI development agency <br /> focused on bringing designs, <br /> brands, and products to life&nbsp;/&gt; </p>
      }
    </div>
  )
}

export default TextContent