import React, { useEffect } from "react";
import "../styles/Partners.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Kurucu from "../images/kurucu.jpg";
import Kurucu2 from "../images/kurucu-2.jpg";
import QurucuBack from "../images/qurucular-back.jpg";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Partners = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const uzunText = `2001-ci ildə Michael Todd ilə Kalanick , peer-to-peer fayl paylaşma şirkətlərindən biri olan ANT HOLDING adlı yeni bir şirkət qurdu .
    Red Swoosh proqramı, istifadəçilərin musiqi sənədləri və videoları da daxil olmaqla böyük media sənədlərini köçürmələrini və ticarət etmələrini təmin etmək üçün
    İnternetdə artan bant genişliyi səmərəliliyindən istifadə etdi. Şirkət keçmiş Scour işçilərindən də kömək aldı.
    7 Mart 2018-ci il tarixində, Kalanick Twitter hesabı vasitəsilə iş artımına yönəldilmiş 10100 təşəbbüs fonduna başlayacağını bildirdi. Fon, ehtimal ki, uşaqlıq evinin adından adlanır.`;

  const exeText = ` Weiner , 2001-ci ildən başlayaraq yeddi ildən çox müddət ərzində ANT HOLDING -də müxtəlif rəhbər vəzifələrində çalışmışdı ,
     ən son olaraq ANT HOLDING-in Şəbəkə Bölməsinin İcraçı vitse-prezidenti vəzifəsində çalışmışdır .
     ANT HOLDING EVP olaraq, 500 milyondan çox istehlakçıya çatan məhsulları idarə edən 3000-dən çox işçidən ibarət bir komandaya rəhbərlik etdi.
     ANT HOLDINGIN-nun Şəbəkə şöbəsinə xidmət edərkən, Inktomi , AltaVista və FAST- lərin əldə edilməsinə və inteqrasiyasına və ANT HOLDINGIN Axtarış Texnologiyasının inkişafına rəhbərlik edən Axtarış rəhbərliyi qrupunun bir hissəsi idi .`;

  return (
    <div className="Aos">
      <div className="grids">
        <div
          data-aos="fade-up"
          className="grid-back"
          style={{ backgroundImage: `url(${QurucuBack})` }}
        >
          <h1 data-aos="fade-right">QURUCULAR</h1>
        </div>

        <h2>"503 Nəfərlik böyük bir ailə"</h2>

        <div className="grids-1">
          <div data-aos="fade-up-right" className="krc-txt">
            <h3>Kalancik :</h3>
            <div
              data-aos="zoom-in"
              style={{ backgroundImage: `url(${Kurucu})` }}
              className="boxes-rsp"
            ></div>
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Daha çox ▼"}
                readLessText={"Geriyə dön ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {uzunText}
              </ReactReadMoreReadLess>
            </p>
          </div>
          <div
            data-aos="zoom-in"
            style={{ backgroundImage: `url(${Kurucu})` }}
            className="boxes"
          ></div>
        </div>
        <div className="grids-2">
          <div
            data-aos="zoom-in-up"
            style={{ backgroundImage: `url(${Kurucu2})` }}
            className="boxes"
          ></div>
          <div data-aos="fade-up" className="krc2-txt">
            <h3>Weiner :</h3>
            <div
              data-aos="zoom-in"
              style={{ backgroundImage: `url(${Kurucu2})` }}
              className="boxes-rsp"
            ></div>
            <p>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Daha çox ▼"}
                readLessText={"Geriyə dön ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {exeText}
              </ReactReadMoreReadLess>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
