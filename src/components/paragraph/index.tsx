interface ParagraphProps {
  children: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p>{children}</p>
}

export default Paragraph;