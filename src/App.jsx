import React from 'react';
import TikTokSection from './components/TikTokSection';
import './App.css';
import lemonImage from '/img/lemon.png';
import pomeloImage from '/img/pomelo.png';
import img1 from '/img/1.png';  // Replace with actual paths
import img2 from '/img/2.png';
import img3 from '/img/3.png';
import img4 from '/img/4.png';
import alsomeImage from '/img/alsome.png';  // Path to the new image

function App() {
  const [imageSrc, setImageSrc] = React.useState('img/meonlemon.png');
  const lemonRef = React.useRef(null);
  const pomeloRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('img/smallmeonlemon.png');
      } else {
        setImageSrc('img/meonlemon.png');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.innerWidth <= 768) {
            lemonRef.current.classList.add('mobile-move-left');
            pomeloRef.current.classList.add('mobile-move-right');
          } else {
            lemonRef.current.classList.add('move-left');
            pomeloRef.current.classList.add('move-right');
          }
        } else {
          if (window.innerWidth <= 768) {
            lemonRef.current.classList.remove('mobile-move-left');
            pomeloRef.current.classList.remove('mobile-move-right');
          } else {
            lemonRef.current.classList.remove('move-left');
            pomeloRef.current.classList.remove('move-right');
          }
        }
      });
    }, options);

    const section = document.querySelector('.lemon-pomelo-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Existing Section - UNCHANGED */}
      <div className="container">
        <img src={imageSrc} alt="Me on the lemon" className="main-image" />
        <div className="text-content">
          <h1 className="main-heading1">FELIZ PIETRAS</h1>
          <h2 className="sub-heading">Content Creator <br></br>
            Web Developer <br></br>
            Based in Aarhus
          </h2>
        </div>
      </div>

      {/* Lemon and Pomelo Section - UNCHANGED */}
      <div className="lemon-pomelo-section">
        <img ref={lemonRef} src={lemonImage} alt="Lemon" className="side-image initial left-image" />
        <div className="center-content">
          <h2 className="center-heading">Welcome to My Portfolio</h2>
          <p className="center-paragraph">
            I am a web developer and content creator passionate about making the web more creative.
          </p>
        </div>
        <img ref={pomeloRef} src={pomeloImage} alt="Pomelo" className="side-image initial right-image" />
      </div>

      {/* New Section - Images and Headings with Alsome Image */}
      
      
      
       {/* New Section - Image Heading Section and Alsome Image */}
       <div className="combined-section">
        <div className="image-heading-section">
          <div className="image-heading-container">
            <img src={img1} alt="Image 1" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Heading 1</h2>
              <p className="section-paragraph">
                I am creative, nice, pretty, confident, obsessed, resilient, reliable, responsible, nice, lovely, I am a good human.
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img2} alt="Image 2" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Heading 2</h2>
              <p className="section-paragraph">
                I am creative, nice, pretty, confident, obsessed, resilient, reliable, responsible, nice, lovely, I am a good human.
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img3} alt="Image 3" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Heading 3</h2>
              <p className="section-paragraph">
                I am creative, nice, pretty, confident, obsessed, resilient, reliable, responsible, nice, lovely, I am a good human.
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img4} alt="Image 4" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Heading 4</h2>
              <p className="section-paragraph">
                I am creative, nice, pretty, confident, obsessed, resilient, reliable, responsible, nice, lovely, I am a good human.
              </p>
            </div>
          </div>
        </div>
        <img src={alsomeImage} alt="Alsome" className="alsome-image" />
      </div>

    {/* COntent */}

    <div className="main-section">
      <h1 className="main-heading">Welcome to My Portfolio</h1>
      <p className="main-paragraph">
        I am a web developer and content creator passionate about making the web more creative.
      </p>

      <div className="circle-container">
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 1</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 2</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 3</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 4</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 5</h2>
        </div>
      </div>
    </div>

    <TikTokSection />



    </>
  );
}



export default App;
