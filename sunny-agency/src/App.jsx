//import { useState } from 'react'

import BottomCard from "./components/BottomCard";
import Card from "./components/Card";
import Header from "./components/Header";
import Photos from "./components/Photos";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      {/* hero page */}
      <section>
        <Header />
      </section>

      {/* info section */}

      <section className="info">
        <Card
          title={"Transform your brand"}
          text={
            "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          btn={"btn-one"}
          order={"order-1 md:order-1 "}
        />

        <div className="order-2 md:order-2  w-full h-120 md:w-1/2 card-bg-one   ">
        </div>

        <div className="order-4 md:order-3  w-full h-120 md:px- md:w-1/2 card-bg-two"></div>


        <Card
          title={"Stand out to the right audience"}
          text={
            "  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          }
          btn={"btn-two"}
          order={"order-3 md:order-4 "}
        />
        <BottomCard
          className="btm-card-one ,  order-5 md:order-5"
          title={"Graphic design"}
          desc={
            "  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          }
        />
        <BottomCard
          className="btm-card-two ,  order-5 md:order-5"
          // image={"/desktop/image-photography.jpg"}
          title={"Photography"}
          desc={
            "  Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          }
        />
      </section>
      {/* testimonials */}
      <section className="testimonials">
        <h2>Client testimonials</h2>
        <div className="testimonials-card">
          <Testimonials
            avatar={"./image-emily.jpg"}
            comment={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
            name={"Emily R."}
            role={"Marketing Director"}
          />
          <Testimonials
            avatar={"./image-thomas.jpg"}
            comment={
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
            name={"Thomas S."}
            role={"Chief Operating Officer"}
          />
          <Testimonials
            avatar={"./image-jennie.jpg"}
            comment={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
            name={"Jennie F."}
            role={"Business Owner"}
          />
        </div>
      </section>

      {/* photos */}
      <Photos />

      <Footer />
    </main>
  );
}

export default App;
