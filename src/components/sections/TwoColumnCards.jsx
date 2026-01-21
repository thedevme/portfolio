import DeviceMockup from '../DeviceMockup';

const TwoColumnCards = ({ cards, imageWidth = 425 }) => {
  const renderCardImage = (card) => {
    // If card has a device specified, use DeviceMockup
    if (card.device) {
      return (
        <div className="device-card-container">
          <DeviceMockup
            screenshot={card.screenshot || card.image}
            device={card.device}
            orientation={card.orientation || 'portrait'}
            frameColor={card.frameColor || 'space-gray'}
            size={card.device === 'watch' ? 'lg' : 'md'}
            noNotch={card.noNotch !== false}
            alt={card.title}
          />
        </div>
      );
    }

    // Fallback to regular image
    return (
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
    );
  };

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
                    {renderCardImage(card)}
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
                    {renderCardImage(card)}
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
