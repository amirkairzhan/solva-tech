export interface ButtonProps {
  text: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => (
  <button className={`button ${className || ''}`.trim()}>{text}</button>
);

export default Button;
