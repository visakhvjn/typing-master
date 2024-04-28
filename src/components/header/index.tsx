interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-8xl text-white text-center mb-16">{title}</h1>
  )
}

export default Header;