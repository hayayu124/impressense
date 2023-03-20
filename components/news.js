import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "@/styles/news.module.scss";
import Link from "next/link";
import ScrollEffect from "components/utility/utilityscrollEffect";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function News({ newsColumn }) {
  const news = newsColumn;
  return (
    <>
      {/* News */}
      <aside className={`${cn.news} sectionSpaceM fle-f right`}>
        <div className={`${cn.verticalTitle}`}>
          <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
            <h1 className={`regular avenir medium`}>NEWS</h1>
          </ScrollEffect>

          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
            <p className={`fon4 fonSp4 spaS regular`}>メディアの掲載情報です</p>
          </ScrollEffect>
        </div>

        {/* PCのときのデザイン */}

        <div className={`${cn.newsColumn} fle-f`}>
          {news.map((el, index) => {
            return (
              <div key={`news${index}`} className={`${cn.newsDetail} mar-b1`}>
                <ScrollEffect
                  className={`${cn.intMostDelay}`}
                  after={cn.intActive}
                >
                  <div className={`${cn.newsPic}`}>
                    <img src={el.pic} alt="" />
                  </div>
                  <h3 className={`fon4 fonSp4 lin-10 mar-t1`}>{el.title}</h3>

                  <div
                    className={`pos-r mar-t1 ${cn.button} 
                    ${cn.newsButton} pointer`}
                  >
                    <Link href={el.link}>
                      <p className={`fon5 fonSp5 white regular pos-a`}>
                        記事を見る
                      </p>
                    </Link>
                  </div>
                </ScrollEffect>
              </div>
            );
          })}
        </div>

        {/* SPのときのデザイン */}
        <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={`mySwiper ${cn.newsColumnSp}`}
          >
            {news.map((el, index) => {
              return (
                <SwiperSlide
                  key={`newsSp${index}`}
                  className={`${cn.newsDetailSp}`}
                >
                  <div className={`${cn.newsPic}`}>
                    <img src={el.pic} alt="" />
                  </div>
                  <h3 className={`fon4 fonSp4 lin-10 mar-t1`}>{el.title}</h3>

                  <div
                    className={`pos-r mar-t1 ${cn.button} 
                    ${cn.newsButton}`}
                  >
                    <Link href={el.link}>
                      <p className={`fon5 fonSp5 white regular pos-a`}>
                        記事を見る
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ScrollEffect>
      </aside>
    </>
  );
}
