export default function ComicCard() {
  return (
    <div className="comic-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
