import { useState } from "react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlideFront = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const moveSlideBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const currentData = data[currentSlide];



  return (
    <main>
      {/* top section */}
      <section className="top">
        <div className="top-left "  
   >
          <img src={currentData.imageDesktop} alt={currentData.header} className="img-desktop" />
          <img src={currentData.imageMobile} alt={currentData.header} className="img-mobile" />

          <nav className="nav">
            {/* logo */}
            <img src="/logo.svg" alt="logo" />
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div className="top-right">
        <h1>{currentData.header}</h1>
        <p>{currentData.desc}</p>
          <button>
            <span>Shop now</span>
            <img src="/icon-arrow.svg" alt="arrow icon" />
          </button>
        </div>

        <div className="slider-btn">
          <img src="/icon-angle-left.svg" alt="left angle" onClick={moveSlideBack} className="black"/>
          <img src="/icon-angle-right.svg" alt="right angle" onClick={moveSlideFront} className="black"/>
        </div>

      </section>
      {/* bottom section */}
      <section className="bottom">
        <div className="btm-one">
          <img src="/image-about-dark.jpg" alt="dark room" />
        </div>
        <div className="btm-two">
          <h2>About our furniture</h2>
          <p>
            {" "}
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className="btm-one">
          <img src="/image-about-light.jpg" alt="light room" />
        </div>
      </section>
    </main>
  );
}

export default App;

const data = [
  {
    id: 1,
    imageDesktop: "/desktop-image-hero-1.jpg",
    imageMobile: "/mobile-image-hero-1.jpg",
    header: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    imageDesktop: "/desktop-image-hero-2.jpg",
    imageMobile: "/mobile-image-hero-2.jpg",
    header: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    imageDesktop: "/desktop-image-hero-3.jpg",
    imageMobile: "/mobile-image-hero-3.jpg",
    header: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
