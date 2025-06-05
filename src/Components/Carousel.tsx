import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Point {
  title: string;
  description: string;
}

const MissionCarousel: React.FC = () => {
  const missionPoints: Point[] = [
    {
      title: 'Impact',
      description:'To help individuals understand and navigate health information effectively.',
    },
    {
      title: 'How it Began',
      description: 'To encourage proactive health decisions for a better quality of life.',
    },
    {
      title: 'Collaboration',
      description: 'To provide accessible resources for all communities.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          className="shadow-lg rounded-lg"
        >
          {missionPoints.map((point, index) => (
            <div key={index} className="p-6 bg-white rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MissionCarousel