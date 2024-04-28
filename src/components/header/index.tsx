interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-7xl text-center mb-16 font-bold dark:text-primary">{title}</h1>
  )
}

export default Header;