import React, { useRef } from "react";
import styles from "../../Styles/Style";
import { brandingData, categoriesData } from "../../Static/data";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  const Navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleSubmit = (data) => {
    Navigate(`/products?category=${data.title}`);
  };

  return (
    <>
      {/* Branding Top Section */}
      {/* <div className={`${styles.section} hidden sm:block`}>
        <div className="flex justify-between items-center w-full rounded-md bg-white my-12 p-5 shadow-sm">
          {brandingData &&
            brandingData.map((data, index) => (
              <div className="flex items-start" key={index}>
                {data.icon}
                <div className="px-3">
                  <h3 className="text-sm font-bold md:text-base">{data.title}</h3>
                  <p className="text-xs md:text-sm">{data.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div> */}

      {/* Categories AutoPlay Slider */}
      <div className={`${styles.section} mb-12 p-6 rounded-lg`} id="categories"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {categoriesData &&
            categoriesData.map((data) => (
              <SwiperSlide key={data.id}>
                <div
                  className="w-full h-[120px] flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-lg bg-gray-50 hover:bg-white transition"
                  onClick={() => handleSubmit(data)}
                >
                  <img
                    src={data.image_Url}
                    alt="product"
                    className="w-[80px] h-[80px] object-contain mb-2"
                  />
                  <h4 className="text-[14px] font-medium text-center">{data.title}</h4>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
