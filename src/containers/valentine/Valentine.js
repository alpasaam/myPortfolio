import React, { useState, useCallback, useRef, useMemo } from "react";
import timelineMoments from "./valentineData";
import "./Valentine.scss";

const movieImage = require("../../assets/images/valentine/MV5BMGFlMTVkMDktZGMzMC00Yjk4LWFmNzEtNTFmMzM2YzM3MWFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg");
const dinnerImage = require("../../assets/images/valentine/553681.png");

const CONFETTI_COLORS = ["#e91e63", "#9c27b0", "#f8bbd9", "#f48fb1", "#ce93d8"];
const CONFETTI_COUNT = 80;

const ValentineConfetti = ({ active }) => {
  const pieces = useMemo(() => {
    return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
  }, []);

  if (!active) return null;
  return (
    <div className="valentine-confetti-wrap" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="valentine-confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
            width: p.size,
            height: p.size * 0.6,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

const ENVELOPE_OPEN_DURATION_MS = 1600;

const Valentine = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [noPhase, setNoPhase] = useState("runaway"); // runaway | areYouSure | reallySure | broken
  const runawayCountRef = useRef(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [saidYes, setSaidYes] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  const moveNoButton = useCallback(() => {
    if (noPhase !== "runaway") return;
    setNoPosition({
      x: Math.random() * 120 - 60,
      y: Math.random() * 80 - 40,
    });
    runawayCountRef.current += 1;
    if (runawayCountRef.current >= 2) setNoPhase("areYouSure");
  }, [noPhase]);

  const handleNoClick = () => {
    if (noPhase === "runaway") {
      moveNoButton();
      return;
    }
    if (noPhase === "areYouSure") {
      setNoPhase("reallySure");
      return;
    }
    if (noPhase === "reallySure") {
      setNoPhase("broken");
      setTimeout(() => setNoButtonVisible(false), 500);
    }
  };

  const handleYesClick = () => {
    setSaidYes(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000);
  };

  const handleEnvelopeClick = () => {
    if (envelopeOpening || envelopeOpen) return;
    setEnvelopeOpening(true);
    setTimeout(() => {
      setEnvelopeOpen(true);
      setEnvelopeOpening(false);
    }, ENVELOPE_OPEN_DURATION_MS);
  };

  return (
    <div className="valentine-page">
      <ValentineConfetti active={showConfetti} />

      {!envelopeOpen ? (
        <div
          className={`valentine-envelope-wrapper ${envelopeOpening ? "valentine-envelope-wrapper--opening" : ""}`}
        >
          <span className="valentine-envelope-to">To Leiah &lt;3</span>
          <div
            className="valentine-envelope"
            onClick={handleEnvelopeClick}
            onKeyDown={(e) => e.key === "Enter" && handleEnvelopeClick()}
            role="button"
            tabIndex={0}
            aria-label="Open letter"
          >
            <div className="valentine-envelope-flap" />
            <div className="valentine-envelope-body">
              <div className="valentine-envelope-stamp" aria-hidden="true">
                &#10084;
              </div>
            </div>
          </div>
          <p className="valentine-envelope-hint">Click to open</p>
        </div>
      ) : (
        <div className="valentine-content">
          <section className="valentine-timeline">
            <h2 className="valentine-timeline-title">Our story</h2>
            <div className="valentine-timeline-line-wrap">
              <div className="valentine-timeline-line" />
              {timelineMoments.map((moment, i) => (
                <div
                  key={moment.id}
                  className={`valentine-timeline-node ${i % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="valentine-timeline-card">
                    <img src={moment.image} alt={moment.label} className="valentine-timeline-img" />
                    <div className="valentine-timeline-caption">
                      <span className="valentine-timeline-date">{moment.date}</span>
                      <span className="valentine-timeline-label">{moment.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="valentine-ask">
            <p className="valentine-ask-transition">And now…</p>
            <h2 className="valentine-ask-question">Will you be my Valentine?</h2>
            <div className="valentine-ask-buttons">
              <button type="button" className="valentine-btn valentine-btn-yes" onClick={handleYesClick}>
                Yes
              </button>
              {(noPhase !== "broken" || noButtonVisible) && (
                <button
                  type="button"
                  className={`valentine-btn valentine-btn-no ${noPhase}`}
                  style={{
                    transform:
                      noPhase === "reallySure"
                        ? `scale(0.7) translate(${noPosition.x}px, ${noPosition.y}px)`
                        : noPhase === "areYouSure"
                        ? `scale(0.85) translate(${noPosition.x}px, ${noPosition.y}px)`
                        : `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    transition: noPhase === "runaway" ? "none" : "transform 0.2s",
                  }}
                  onMouseEnter={noPhase === "runaway" ? moveNoButton : undefined}
                  onClick={handleNoClick}
                >
                  No
                </button>
              )}
            </div>
            {noPhase === "areYouSure" && <p className="valentine-ask-sure">Are you sure?</p>}
            {noPhase === "reallySure" && <p className="valentine-ask-sure">Really sure?</p>}
            {noPhase === "broken" && <p className="valentine-ask-sure">Okay, we only have Yes left.</p>}
          </section>

          {saidYes && (
            <section className="valentine-success">
              <p className="valentine-success-intro">And here&apos;s what we&apos;re doing…</p>
              <div className="valentine-itinerary">
                <div className="valentine-itinerary-item valentine-itinerary-item--movie">
                  <img src={movieImage} alt="Wuthering Heights (2026)" className="valentine-itinerary-img" />
                  <div>
                    <h3>Wuthering Heights (2026)</h3>
                    <p>2:30 PM</p>
                  </div>
                </div>
                <div className="valentine-itinerary-item">
                  <img src={dinnerImage} alt="Thanksgiving Point Valentine Dinner Dance" className="valentine-itinerary-img" />
                  <div>
                    <h3>Thanksgiving Point – Valentine Dinner Dance</h3>
                    <p>6:00 PM</p>
                  </div>
                </div>
              </div>
              <p className="valentine-success-closing">You&apos;re my Valentine, Baby!</p>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default Valentine;
