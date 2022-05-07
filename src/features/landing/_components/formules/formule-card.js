export default function FormuleCard({
  title = "",
  subtitle = "",
  list = [],
  price = 0,
}) {
  return (
    <div>
      <h1 className="font-dancingScript p-5">{title}</h1>
      <h2>{subtitle}</h2>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item.html }}
            ></li>
          );
        })}
      </ul>
      <p>{price}€/mois</p>
      <button>Acheter</button>
    </div>
  );
}
