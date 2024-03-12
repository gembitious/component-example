import { FC } from 'react';

const Grade: FC<{ number: number }> = ({ number }) => {
  return (
    <div className="grade-wrapper">
      {Array(5)
        .fill(0)
        .map((v, index) => (
          <div className={`grade${index < number ? ' scored' : ''}`}></div>
        ))}
    </div>
  );
};

interface CardProps {
  title: string;
  author?: string;
  label?: string;
  grade?: number; // 1~5 정수 별점
  description?: string;
  landscape?: boolean; // 가로형 여부
}

const Card: FC<CardProps> = ({
  title,
  author,
  label,
  grade,
  description,
  landscape,
}) => {
  return (
    <div className={`card${landscape ? ' landscape' : ''}`}>
      <img src="https://source.unsplash.com/random" />
      <div className="detail-container">
        {label && <div className="label">{label}</div>}
        <div className="title">{title}</div>
        {author && <div className="author">{author}</div>}
        {grade && <Grade number={grade} />}
        {description && <div className="description">{description}</div>}
      </div>
    </div>
  );
};

export default Card;
