import "./chocklate.css";

export default function Chocklate({ chocklate }) {
  console.log(chocklate);
  return (
    <div className="choclate">
      <div className="image-container">
        <img src={chocklate.imageUrl} alt="images" />
      </div>
      <div className="info">
        <h3 className="choco-name">{chocklate.name}</h3>
        <h3 className="choco-brand">{chocklate.brand}</h3>
        <h6 className="flavor">{chocklate.flavor}</h6>
        <h2 className="price">${chocklate.price}</h2>
        <p>{chocklate.interestingFact}</p>
        <p className="ingredients">
          ingredients:
          {chocklate.ingredients.map((i) => (
            <span key={i}>{i},</span>
          ))}
        </p>
        <button>Gift me</button>
      </div>
    </div>
  );
}
