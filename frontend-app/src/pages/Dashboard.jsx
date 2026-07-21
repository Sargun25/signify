import { useState } from "react";

function FactCard({ card }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleHover = () => {
    setFlipped(true);
  };

  const handleLeave = () => {
    setFlipped(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % card.facts.length);
    }, 600);
  };

  return (
    <div
      className="flip-card"
      style={{ height: '200px' }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flip-card-inner" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        <div
          className="flip-card-front grain-texture"
          style={{ backgroundColor: card.bg, padding: '28px', borderRadius: '20px' }}
        >
          <h4 style={{ fontWeight: 700, fontSize: '22px', color: card.titleColor, marginBottom: '8px' }}>
            {card.title}
          </h4>
          <p style={{ fontSize: '16px', color: card.textColor }}>Hover to reveal a fact</p>
        </div>
        <div
          className="flip-card-back"
          style={{ backgroundColor: card.bg, padding: '28px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <p style={{ fontSize: '15px', color: card.titleColor, fontWeight: 600, textAlign: 'center' }}>
            {card.facts[index]}
          </p>
        </div>
      </div>
    </div>
  );
}
function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: '#fcf9f8',
        color: '#1b1c1c',
        minHeight: '100vh',
        fontFamily: 'Quicksand, sans-serif'
      }}
    >
      
      
      {/* Main Content */}
    <main
      style={{
        marginLeft: '220px',
        padding: '48px 64px 100px'
      }}
    >

        {/* Hero Section */}
        <section
          style={{
            marginBottom: '56px'
          }}
        >
          <div
            className="paper-shadow"
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid rgba(86,99,59,0.1)',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '420px'
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                maxWidth: '50%'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  backgroundColor: '#d9e9b6',
                  color: '#141f01',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '999px',
                  marginBottom: '18px',
                  letterSpacing: '0.05em'
                }}
              >
                FOCUS DAILY
              </span>

              <h2
                style={{
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                  fontSize: '52px',
                  fontWeight: 700,
                  color: '#1b1c1c',
                  marginBottom: '18px',
                  lineHeight: 1.1
                }}
              >
                Perfect Your Signing Lingo
              </h2>

              <p
                style={{
                  fontSize: '18px',
                  color: '#45483e',
                  marginBottom: '32px',
                  lineHeight: 1.7
                }}
              >
                From A to Z, 0 to 10, and hello to goodbye—master ASL basics with confidence.
                Signify is a carefully curated learning space for mastering the sign language basics with clarity and flow!
              </p>

              <button
               style={{
  backgroundColor: '#b98896',
  color: '#ffffff',
  padding: '16px 32px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',

  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '1.5',
  letterSpacing: '0.2px',

  textAlign: 'center',

  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
}}
              >
                Start learning today with Signify’s interactive ASL experience.

              </button>
            </div>

            <div
  className="animate-mascot"
  style={{
    position: 'absolute',
    right: '5%',
    bottom: '-15%',
    width: 'clamp(180px, 35vw, 500px)',
    height: 'auto'
  }}
>
  <img
    src="/mascot.png"
    alt="Mascot"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }}
  />
</div>
          </div>
        </section>

      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px'
  }}
>
  {[
    {
      title: "ASL History Facts",
      bg: "#8c9b6e",
      titleColor: "#26320f",
      textColor: "rgba(38,50,15,0.8)",
      front: "Explore the rich history behind American Sign Language.",
      facts: [
        "ASL was founded in 1817 at the first American School for the Deaf in Hartford, Connecticut.",
        "Thomas Hopkins Gallaudet and Laurent Clerc brought sign language to America from France.",
        "ASL evolved from French Sign Language mixed with local sign systems already used in America.",
        "Martha's Vineyard had so many deaf residents in the 1800s that almost everyone on the island knew sign language.",
        "ASL was officially recognized as a complete, natural language by linguists in the 1960s."
      ]
    },
    {
      title: "Did You Know?",
      bg: "#b98896",
      titleColor: "#46232e",
      textColor: "rgba(70,35,46,0.8)",
      front: "Surprising facts about ASL you probably never heard.",
      facts: [
        "ASL is the 3rd most used language in the United States with over 500,000 native signers.",
        "ASL is not universal — every country has its own sign language. British Sign Language is completely different.",
        "Babies can learn sign language before they can speak — infants as young as 6 months can sign.",
        "ASL uses facial expressions and body movement as grammar — they work like punctuation in written language.",
        "Signing activates the same areas of the brain as spoken language, proving it is a true language."
      ]
    }
  ].map((card, i) => (
    <FactCard key={i} card={card} />
  ))}
</div>
<section></section>
   

      </main>
    </div>
  )
}

export default Dashboard
