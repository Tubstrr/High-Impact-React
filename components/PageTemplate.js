import Header from './Header'
import Footer from './Footer'

const PageTemplateStyle = {
  "background":"#dedede"
}
const MainContainerStyles = {
  "width":"100vw",
  "height":"100vh",
  background:"pink"
}

const PageTemplate = (props) => (
  <div style={PageTemplateStyle}>
    <Header />
    <div style={MainContainerStyles}>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default PageTemplate
