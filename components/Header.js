import Link from 'next/link'
// import logo from './imgs/logo.png'

const linkStyle = {
  marginRight: 15
}
const HeaderStyles = {
  "position":"fixed",
  background:"#dedede",
  width:"100vw",
  top:0
}

// const

const Header = () => (
    <div style={HeaderStyles}>
      <div>
        <img src=".../static/logo.jpg" />
      </div>
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/video">
          <a style={linkStyle}>Video</a>
        </Link>
        <Link href="/web">
          <a style={linkStyle}>Web</a>
        </Link>
        <Link href="/photo">
          <a style={linkStyle}>Photo</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
      </div>
    </div>
)

export default Header
