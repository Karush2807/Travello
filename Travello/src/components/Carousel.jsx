import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChooseUs = () => {
  const features = [
    {
      title: 'Discover Hidden Attractions',
      description:
        'Interactive maps that guide you to hidden gems and local experiences, offering real-time tips based on your location.',
      image: '/hid1.jpg',
    },
    {
      title: 'Challenges & Quests',
      description:
        'Engage in gamified experiences with photo challenges, cultural quests, and earn rewards for completing them.',
      image: '/hid2.jpg',
    },
    {
      title: 'Gamification Rewards',
      description:
        'Earn points, badges, and achievements as you explore. Unlock levels that give you access to exclusive content and hidden locations.',
      image: '/hid3.jpg',
    },
    {
      title: 'Social Media Integration',
      description:
        'Seamlessly share your travel experiences, achievements, and photos on Instagram, Facebook, and Twitter.',
      image: '/hid4.jpg',
    },
    {
      title: 'Dynamic Leaderboards',
      description:
        'Compete with fellow travelers on global and location-based leaderboards to see who’s leading the exploration game.',
      image: '/hid5.jpg',
    },
    {
      title: 'Offline Mode',
      description:
        'Access downloadable maps and challenges even in areas with poor connectivity, ensuring uninterrupted adventure.',
      image: '/hid6.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative">
      
      <div className="relative bg-green-200 py-20 px-4" id="featuresSection">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl flex justify-center items-center font-bold mb-6 text-emerald-800">Why Choose Us?</h2>
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-4 bg-white bg-opacity-90 rounded shadow-md text-center">
                <img src={feature.image} alt={feature.title} className="h-60 mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
