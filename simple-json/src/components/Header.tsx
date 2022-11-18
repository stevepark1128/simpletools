import PropTypes from 'prop-types'


interface HeaderProps {
    title?: string;
}

const Header = ({title} : HeaderProps) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header

Header.defaultProps = {
    title: 'Simple Json Viewer',
}
