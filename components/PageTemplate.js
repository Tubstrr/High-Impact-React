import Header from './Header'
import Footer from './Footer'

const PageTemplateStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const PageTemplate = (props) => (
  <div style={PageTemplateStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default PageTemplate
