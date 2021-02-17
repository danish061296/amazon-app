import React from 'react';
import '../css/Home.css';
import Item from './Item';

const Home = () => {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3673_SVOD_ValentinesDay/RB-3673_SVOD_ValentinesDay_v2_3000x1200._CB661029042_.jpg"
        alt=""
      />

      <div className="home-row">
        <Item
          id="355363"
          title="Juicer Wide Mouth Juice Extractor"
          price={10.67}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc"
        />
        <Item
          id="732352"
          title="Anne Klien"
          price={30.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Item
          id="356234"
          title="Wrangler Authentics"
          price={27.01}
          rating={4}
          image="https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home-row">
        <Item
          id="845674"
          title="Moto E | Unlocked"
          price={122.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/61HX0rKZ62L._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Item
          id="309539"
          title="BESTRIX Magnetic Phone Car"
          price={79.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71aQvJVQMLL._QL65_AC_UL640_.jpg"
        />
        <Item
          id="236345"
          title="Takid Fuego Hot Chilli Pepper"
          price={13.93}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Qtj5iVnFL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Item
          id="777452"
          title="Keep Calm and Eat Takis T-shirt"
          price={16.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71TCI+XBJFL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
