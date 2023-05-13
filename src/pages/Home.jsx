import React from "react";
import Beach from "../Assets/beach.svg";
import styles from "./Home.module.css";
import CardComp from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const CardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "Resort One",
      description:
        "Located on a beautiful beach, Resort One offers luxurious accommodations and a variety of activities for guests to enjoy.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
      title: "Resort Two",
      description:
        "Nestled in the mountains, Resort Two offers stunning views and a peaceful retreat for those seeking a relaxing getaway.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      title: "Resort Three",
      description:
        "Surrounded by lush tropical gardens, Resort Three is the perfect destination for nature lovers and adventure seekers alike.",
    },
    // Add more objects as needed
  ];

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeMainImage}>
        <img style={{ height: "50%", width: "100%" }} src={Beach} alt="" />
      </div>
      <div>
        <div className={styles.DescriptionMain}>
          <span>
            Welcome to our luxury resort, where every detail is crafted to
            deliver an unforgettable experience. Immerse yourself in the
            tranquil surroundings of our lush gardens and pristine beach,
            indulge in gourmet dining and indulge in the finest spa treatments.
            Unwind in our exquisite accommodations, where luxury meets comfort,
            and let us elevate your stay to the next level.
          </span>
        </div>
        <div className={styles.CardContainerMain}>
          {CardsData.map((data) => {
            return (
              <>
                <CardComp cardData={data} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
