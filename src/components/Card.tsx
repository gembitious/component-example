import { FC } from 'react';

interface CardProps {
  author?: string;
  label?: string;
  title?: string;
  grade?: number; // 1~5 정수 별점
  description?: string;
  landscape?: boolean; // 가로형 여부
}

const Card: FC<CardProps> = ({
  author,
  label,
  title,
  grade,
  description,
  landscape,
}) => {
  return (
    <div className={`card ${landscape ? 'landscape' : ''}`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Card;
