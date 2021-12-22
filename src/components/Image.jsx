export default function Image(props) {
  const { disabled, className, onClick, altText, indexNumber } = props;
  return (
    <img
      index={indexNumber}
      src={element}
      alt={altText}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={{ style }}
    />
  );
}
