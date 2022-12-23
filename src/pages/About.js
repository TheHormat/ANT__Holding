import React, { useEffect } from "react";
import AntGroup from "../images/about-back.jpg";
import ImgAbout from "../images/antfinancial.jpg";
import "../styles/About.css";
import Aos from "aos";
import ImgWhy from "../images/ant-financial.jpeg";
import ReactReadMoreReadLess from "react-read-more-read-less";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const longText = ` Ant Group əvvəllər kimi tanınan Ant Maliyyə və Alipay , Çin ortaq şirkəti Alibaba Group . Qrup Çinin ən böyük rəqəmsal ödəniş platforma sahibi Alipay iyun 2020-ci ildə CN ¥ 118 trilyon çatan ümumi ödəniş həcmi (TPV) ilə bir milyard istifadəçilər və 80 milyon tacirlər xidmət,
   Mart 2019, Wall Street JournalAnt’ın flaqman Tianhong Yu'e Bao pul bazarı fondunun 588 milyondan çox istifadəçisi və ya Çin əhalisinin üçdə birindən çoxu ilə pul verən, dünyanın ən böyük fondu olduğunu bildirdi.
  2020-ci ilin oktyabrında Ant Group, o dövrdə dünyanın ən böyük IPO- sunda 34,5 milyard ABŞ dolları toplamağa qərar vermiş və şirkəti 313 milyard ABŞ dolları dəyərində qiymətləndirmişdi. IPO ərəfəsində Çin prosesi irəliləməsini dayandırdı.
  12 Aprel 2021-ci ildə The Wall Street Journal , Çin hökumətinin təzyiqi altında Ant Group'un Çinin dövlət tərəfindən idarə olunan mərkəzi bankının nəzarət etdiyi bir maliyyə holdinqinə çevriləcəyini bildirdi .
   Sentyabr 2017-ci ildə Ant Group Sir ilə birgə müəssisə formalaşır Li Ka-Shing s ' CK Hutchison Holdings bir digital cüzdan xidmət başlamaq üçün Hong Kong . 2018-ci ilin iyun ayında şirkət,
   Hong Kong və Filippinlər arasında real vaxtda pul köçürmələrini həyata keçirməyə imkan verəcək blok zəncirlə işləyən nağd pul köçürmə xidmətinə başladı.
`;
  return (
    <div className="about">
      <div
        data-aos="fade-up"
        className="aboutTop"
        style={{ backgroundImage: `url(${AntGroup})` }}
      >
        <h1 data-aos="fade-right">HAQQIMIZDA</h1>
      </div>
      <div data-aos="fade-up" className="aboutBottom">
        <p>
          <ReactReadMoreReadLess
            charLimit={160}
            readMoreText={"Daha çox ▼"}
            readLessText={"Geriyə dön ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText}
          </ReactReadMoreReadLess>
        </p>
      </div>
      <div
        className="img-about"
        style={{ backgroundImage: `url(${ImgAbout})` }}
      >
        <div className="overlay-about"></div>
        <h1>RƏQƏMLƏRLƏ BİZ :</h1>
        <h4 data-aos="fade-left">
          <span>QURULUŞ </span>
          <i class="fas fa-long-arrow-alt-right"></i> 2007
        </h4>
        <h4 data-aos="fade-left">
          <span>ŞİRKƏTLƏR </span>
          <i class="fas fa-long-arrow-alt-right"></i> 3 ( TOKYO , ISTANBUL ,NEW
          YORK )
        </h4>
        <h4 data-aos="fade-left">
          <span>İŞ HƏCMİ </span>
          <i class="fas fa-long-arrow-alt-right"></i> 70M $
        </h4>
      </div>
      <div data-aos="fade-up-right" className="targets">
        <h1>
          HƏDƏFLƏRİMİZ <i class="far fa-hand-point-right"></i>
        </h1>
        <h4>
          Çində doğulan bir dünya markası olmaq. Çalışdığımız coğrafiyanı
          genişləndirərək hədəf yeni bazarlarla məşğulluq imkanları yaratmaqdır.
          Çində inkişaf etdirdiyimiz yenilikçi iş modelləri ilə dünya miqyasında
          xidmət istehsal edə biləcək gənc bir marka olaraq yolumuza davam
          etmək.
        </h4>
      </div>

      <div className="why-about" style={{ backgroundImage: `url(${ImgWhy})` }}>
        <div data-aos="fade-right" className="why-txt">
          <h3>
            Niyə məhz bizim şirkət? <i id="redicon" class="fas fa-times"></i>
          </h3>
          <h3>
            İcazə verin məhz niyə bizimı işləməli olduğunuzu deyim{" "}
            <i id="greenicon" class="fas fa-check"></i>
          </h3>
        </div>
        <div data-aos="fade-down" className="why-txt-1">
          <h3>
            Bizə biraz özünüz barədə danışın{" "}
            <i id="redicon" class="fas fa-times"></i>
          </h3>
          <h3>
            Bizə keçmiş iş təcrübələrinizdən maraqlı anlardan danışın{" "}
            <i id="greenicon" class="fas fa-check"></i>
          </h3>
        </div>
        <div data-aos="fade-right" className="why-txt-2">
          <h3>
            5 ildən sonra özünüzü harda görürsünüz ?{" "}
            <i id="redicon" class="fas fa-times"></i>
          </h3>
          <h3>
            İcazə verin bizimlə yaxşı çalışacağınız təqdirdə 5 ildən sonra harda
            olacağınızı deyim <i id="greenicon" class="fas fa-check"></i>
          </h3>
        </div>
        <div data-aos="fade-down" className="why-txt-3">
          <h3>
            Stresə dəvamlı namizəd <i id="redicon" class="fas fa-times"></i>
          </h3>
          <h3>
            Task/time management-i yaxşı olan namizəd{" "}
            <i id="greenicon" class="fas fa-check"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
