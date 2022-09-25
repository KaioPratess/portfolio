import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Tag from './Tag';

const Card = (props) => {
  const [showCardBg, setShowCardBg] = useState(false);
  const cardBg = useRef();

  const Tags = () => {
    const array = props.tags.map((tag) => {
      return <Tag text={tag} background="#12128A" key={nanoid()} />;
    });

    return array;
  };

  const handleHover = () => {
    setShowCardBg(true);
  };

  const handleMouseLeave = () => {
    setShowCardBg(false);
  };

  const handleClick = (e) => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    props.changeProject(
      e.target.parentElement.childNodes[0].childNodes[0].textContent,
    );
  };

  useEffect(() => {
    if (showCardBg) {
      cardBg.current.style.display = 'flex';
    } else {
      cardBg.current.style.display = 'none';
    }
  }, [showCardBg]);

  return (
    <div
      className="card"
      style={{ background: `url(${props.background}) no-repeat center/cover` }}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="desc-div">
        <h4 className="project-title">{props.name}</h4>
        <span className="project-category">{props.category}</span>
      </div>
      <div className="tags-div">
        <Tags />
      </div>
      <div className="status">
        <Tag
          text={props.status}
          background={props.status === 'Ongoing' ? 'red' : 'green'}
        />
      </div>
      <div className="card-bg-hover" ref={cardBg}>
        <p>More Info</p>
      </div>
    </div>
  );
};

export default Card;
