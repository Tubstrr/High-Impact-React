import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
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
)

export default Header
