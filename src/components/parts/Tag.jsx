const Tag = (props) => {
  return (
    <div className="tag" style={{ background: props.background }}>
      {props.text}
    </div>
  );
};

export default Tag;
