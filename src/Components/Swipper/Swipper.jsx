import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Swipper() {
    const a =[
        {URL:"profile",Name:"xyz",Description:"Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs " },
        {URL:"profile",Name:"xyz",Description:"Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs " },
        {URL:"profile",Name:"xyz",Description:"Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs " },
        {URL:"profile",Name:"xyz",Description:"Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs " },
        {URL:"profile",Name:"xyz",Description:"Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs " },
    ]
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        padding:"50px",
        margin:"30px",
        cursor:"pointer"
      
      }
      const arr = a.map(cvalue => <div style={styles}><img src={require(`../../Assets/${cvalue.URL}.jpg`)}/> <h2 className='font-bold p-3'>{cvalue.Name}</h2> <p className='text-center'>{cvalue.Description}</p></div>);
  return (
    <div>
         

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>{arr[0]}</SwiperSlide>
      <SwiperSlide>{arr[1]}</SwiperSlide>
      <SwiperSlide>{arr[2]}</SwiperSlide>
      <SwiperSlide>{arr[3]}</SwiperSlide>
      <SwiperSlide>{arr[4]}</SwiperSlide>
    </Swiper>
   
    </div>
    
  )
}

export default Swipper



     
 
