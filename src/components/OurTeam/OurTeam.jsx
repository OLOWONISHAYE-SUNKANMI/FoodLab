import React from 'react';
import './OurTeam.css';
import Group_1 from '../../assets/Group_1.png';
import Group_2 from '../../assets/Group_2.png';
import Group_3 from '../../assets/Group_3.png';
import Group_4 from '../../assets/Group_4.png';
import Group_5 from '../../assets/Group_5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules correctly
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';

const OurTeam = () => {
  return (
    <div className='our-team'>
      <div className='our-team__header'> 
        <h1>Our Team</h1>
      </div>

      <div className='our-team__content'>
        <Swiper
          modules={[Pagination, A11y, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className='our-team__content__card'>
              <img src={Group_1} alt="Group_1" />
              <h4>Adewole Samuel Adebola</h4>
              <h5>CO founder/CEO</h5>
              <p>"This platform is exceptionally well-designed, reflecting a deep understanding of customer needs and preferences. 
                The intuitive layout makes it effortless to navigate and highly user-friendly."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='our-team__content__card'>
              <img src={Group_2} alt="Group_2" />
              <h4>Adewunmi Sodiq</h4>
              <h5>Co-founder/COO/CFO</h5>
              <p>"I can confidently say that FoodLab is thoughtfully designed with our customers in mind. 
                The layout is intuitive and user-friendly, making it easy to navigate. FoodLab saves significant time by providing 
                a comprehensive solution with everything needed to set up a seamless multi-vendor system."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='our-team__content__card'>
              <img src={Group_3} alt="Group_3" />
              <h4>Daniel Ofuokwu</h4>
              <h5>Chief Of Data and Technology</h5>
              <p>"Working at Foodlab Logistics as the Chief of Data and Technology has been a fantastic journey. 
                We’ve developed a robust, data-driven solution for the food delivery industry, integrating advanced technologies to optimize operations and enhance efficiency."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='our-team__content__card'>
              <img src={Group_4} alt="Group_4" />
              <h4>Garba Abubakar O.</h4>
              <h5>Chief of Customer Relations</h5>
              <p>"My primary focus is on enhancing the customer experience at every touchpoint. 
                Our mission is to provide an unparalleled food delivery service that not only meets but exceeds the expectations of our valued customers."" </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='our-team__content__card'>
              <img src={Group_5} alt="Group_5" />
              <h4>Simire Joshua</h4>
              <h5>General Manager</h5>
              <p>"My primary responsibility is ensuring that all aspects of our operations align with our mission to deliver an exceptional food delivery experience. 
                My focus is on optimizing processes, leading a high-performing team, and fostering a culture of innovation and excellence."</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
