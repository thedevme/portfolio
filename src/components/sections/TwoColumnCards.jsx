const TwoColumnCards = ({ cards, imageWidth = 425 }) => {
  return (
    <div className="container my-5">
      <div className="container my-5">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div
                className="card h-100 p-4"
                style={{
                  backgroundColor: "#1d222a",
                  borderRadius: "20px",
                }}
              >
                {card.imagePosition === "top" ? (
                  <>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        width: `${imageWidth}px`,
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <div className="card-body text-white">
                      <h2 className="text-center">{card.title}</h2>
                      <p className="card-text">{card.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-center">{card.title}</h2>
                    <div className="card-body text-white">
                      <p className="card-text text-white">{card.description}</p>
                    </div>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        width: `${imageWidth}px`,
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnCards;
