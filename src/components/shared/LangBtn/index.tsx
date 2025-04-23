import type { FC } from 'react';

interface LangBtnProps {
  text: string;
}

const LangBtn: FC<LangBtnProps> = ({ text }) => (
  <button className="lang-btn">{text}</button>
);

export default LangBtn;
