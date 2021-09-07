import Link from "next/link";
import { FaBorderAll } from "react-icons/fa";

const offlineProducts = {
  
  
  0:{
    id: 0,
    name: 'Умный замок невидимка SEVEN LOCK SL-7709',
    description:"принципиально новый и улучшенный вид скрытых замков на рынке, который уже давно используется в Европе и США. Это электронное накладное устройство с пультом, которое совершенно не видно с наружной стороны двери. Красивый дизайн идеально впишется в любой интерьер вашего дома.",
    img_url:{
      0:'/static/products/0/1.jpg',
      1:'/static/products/0/2.jpg',
      2:'/static/products/0/3.jpg',
      3:'/static/products/0/4.jpg',
      4:'/static/products/0/5.jpg'
    },
    price: "3 700",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Южная Корея"
          },
          2:{
            name:"Класс защиты замка",
            type:"4"
          },
          3:{
            name:"Открытие блока",
            type:"Универсальное"
          },
          4:{
            name:"Цвет замка",
            type:"Серый матовый"
          },
          5:{
            name:"Открытие устройства",
            type:"С мобильного телефона, Радиобрелком "
          },
          6:{
            name:"Управление устройством",
            type:"Радиобрелок, Мобильный телефон (опционально), СКУД (опционально)"
          },
          7:{
            name:"Интерфейс",
            type:"Беспроводной"
          },
          8:{
            name:"Тип установки замка",
            type:"Накладной"
          }
        }
      },
      1:{
        name:"Дополнительные",
        info:{
          0:{
            name:"Индикация открытия/закрытия",
            type:"Звуковая/Световая"
          }
        }
      },
      2:{
        name:"Комплектация",
        info:{
          0:{
            name:"Корпус замка",
            type:"Да"
          },
          1:{
            name:"Радиобрелок",
            type:"2"
          },
          2:{
            name:"Ответная планка",
            type:"1"
          },
          3:{
            name:"Крепежный комплект",
            type:"Да"
          },
          4:{
            name:"Инструкция по установке/эксплуатации",
            type:"Да"
          },
          5:{
            name:"Батарейки",
            type:"АА"
          },
          
        }
      },
      3:{
        name:"Общие",
        info:{
          0:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          1:{
            name:"Контроль разряда",
            type:"Да"
          },
          2:{
            name:"Максимальная рабочая температура",
            type:"60 град."
          },
          3:{
            name:"Длина",
            type:"149 мм"
          },
          4:{
            name:"Ширина",
            type:"80 мм"
          },
          5:{
            name:"Высота",
            type:"32 мм"
          },
          6:{
            name:"Вес",
            type:"1 кг"
          },
          7:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription0">
      <br/> 
      <p>
      Умный замок невидимка SEVEN LOCK SL-7709
      – принципиально новый и улучшенный вид скрытых замков на рынке, который уже давно используется в Европе и США. Это электронное накладное устройство с пультом, которое совершенно не видно с наружной стороны двери. Красивый дизайн идеально впишется в любой интерьер вашего дома
      </p> 
      <br/>
      <p style={{color:"#666666"}}>
        Есть возможность интеграции с Умным домом SEVEN HOME, сигнализациями Ajax, Дунай и другими системами (опционально).
      </p>
      <div style={{display:"flex",justifyContent:"center"}}>
        <img src="/static/products/0/detimg0.jpg" style={{margin:"auto", width:"100%", maxWidth:"400px"}}/>
      </div>
       <h1 style={{color:"#666666"}}>Умный беспроводной замок невидимка SEVEN LOCK SL-7709 является универсальным:</h1>
      <br/>
      <div>
        <p>1.Можно устанавливать на дверь как с левым, так и с правым открытием (можно просто перевернуть замок, вверх ногами он тоже работает :-), значки на замке симметричны).</p>
        <p>2.Есть функция автозакрытия, когда замок закрывается автоматически при захлопывании двери (для тех, кто постоянно забывает закрыл он дверь или нет) либо без автозакрытия, когда замок можно закрыть только при помощи радиобрелка (для тех, кто может выйти из дома без ключа). Автозакрытие отключается кнопкой. Магнит вынимать не нужно.</p>
        <p>3.Есть функция «антипаника» - в экстренных ситуациях быстрое открытие двери нажатием на специальную кнопку сверху (в повседневной жизни не рекомендуем использовать без необходимости). </p>
        <p>4.Есть возможность управления замком через Bluetooth с мобильного приложения при помощи<Link href="/product/3">Модуля управления замком SEVEN LOCK m-7715B</Link> .</p>
        <p>5.Есть возможность управления замком через  Wi-Fi при помощи<Link href={`/`}>Модуля управления замком SEVEN LOCK m-7715B и Шлюза SEVEN LOCK SL-7734</Link> .</p>
        <p>6.Также если вы хотите дополнительно обезопасить свою квартиру, то есть возможность расширения за счет установки охранной сигнализации Ajax. Вы просто подключаете замок невидимку в общую систему управления сигнализацией. Вместе с <Link href="/product/10">комплектом сигнализации</Link> дешевле!</p>
      </div>
      <br/>
      <h1>Подходит как для входных и межкомнатных дверей в квартиру, так и в офис.</h1>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/gGlJ37lZNfU'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <br/>
      <h1>Основными преимуществами скрытых замков перед привычными дверными являются: </h1>
      <br/>
      <h3 style={{fontSize:"20px"}}>Отсутствие замочной скважины</h3>
      <p>В этом случае у грабителя просто нет возможности вскрыть вашу дверь, так как нельзя взломать то, чего не видно. Надежная защита, когда вы отсутствуете дома </p>
      <br/>
      <h3>Радиобрелок работает по динамическому коду</h3>
      <p>Это означает, что один сигнал невозможно перехватить и использовать повторно </p>
      <br/>
      <h3>Прост в установке</h3>
      <p>Не требует прокладки проводов, так как работает от батареек. Когда батареи разряжаются, замок сигнализирует на протяжении 2-3х недель. В этом случае необходимо поменять батарейки. Даже если вы не успели это сделать, то замок просто откроется</p>
      <br/>
      <h3>Зацеп якорного типа</h3>
      <p>Зацеп якорного типа не позволит злоумышленнику вскрыть дверь ломом</p>
      <br/>
      <h3>Подходит на любой тип двери</h3>
      <p>Вы можете установить замок на любую дверь (металлическую, стальную, железную, деревянную, пластиковую), в том числе и на стеклянную (в данном случае есть возможность установки на крепкий 3М скотч без сверления)</p>
      <br/>
      <h3>Сенсорные кнопки</h3>
      <p>Есть сенсорные кнопки открытия и закрытия для удобства выхода</p>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/zaK--tvcWn0'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <br/>
      <h1>Замок невидимка SEVEN LOCK SL-7709 поставляется в полной комплектации:</h1>
      <li>Радиоуправляемый замок SEVEN LOCK SL-7709 – 1 шт.</li>
      <li>Радиобрелок – 2 шт. (есть возможность приобрести дополнительно, если надо больше)</li>
      <li>Все необходимое для установки самостоятельно (монтажная пластина, ответная накладка, усиливающая пластина, установочные кольца, 3М наклейка, винты для крепления замка, шурупы, заклепки вытяжные).</li>
      <li>Батарейки АА – 2 шт.</li>
      <li>Руководство пользователя.</li>
      <li>Гарантийный талон.</li>
      <br/>
      <h1>Также дополнительно вы можете подключить в систему целый ряд аксессуаров (например,<Link href={`/product/8`}>кнопка выхода</Link>, <Link href={`/`}>кодовая клавиатура</Link>).</h1>
      
      <br/><br/>
      <h1 style={{fontSize:"20px"}}>Технические характеристики скрытого замка SEVEN LOCK SL-7709:</h1>
      
      < div className="tbody" >
      <div className="tr" >
          <div className="td" >Частота передачи сигнала управления </div>
          <div className="td" >динамический код, 433 МГц</div>
      </div>
      <div className="tr" >
          <div className="td" >Дальность передачи сигнала управления</div>
          <div className="td" >до 50 метров</div>
      </div>
      <div className="tr" >
          <div className="td" >Питание</div>
          <div className="td" >2 элемента питания типа АА</div>
      </div>
      <div className="tr" >
          <div className="td" >Ток потребления холостого хода</div>
          <div className="td" >≥ 10 мкА</div>
      </div>
      <div className="tr" >
          <div className="td" >Ток потребления в рабочем режиме:<p>- автономный замок SEVEN LOCK</p><p>- радиобрелок</p></div>
          <div className="td" ><p>≥ 42 мА</p><p>≥ 3 мА</p></div>
      </div>
      <div className="tr" >
          <div className="td" >Срок службы от батарей</div>
          <div className="td" >до одного года</div>
      </div>
      <div className="tr" >
          <div className="td" >Кнопки открытия/закрытия</div>
          <div className="td" >две сенсорные кнопки на корпусе замка</div>
      </div>
      <div className="tr" >
          <div className="td" >Усилие на разрыв</div>
          <div className="td" >1000 кг</div>
      </div>
      <div className="tr" >
          <div className="td" >Рабочие условия</div>
          <div className="td" >0°C - +60°C, влажность 10% - 90%</div>
      </div>
      <div className="tr" >
          <div className="td" >
            <p>Вес нетто:</p>
            <p>- автономный замок SEVEN LOCK</p>
            <p>- радиобрелок</p>
          </div>
          <div className="td" ><p>800 гр</p><p>15 гр</p></div>
      </div>
      <div className="tr" >
          <div className="td" ><p>Габаритные размеры</p><p>Количество брелков в комплекте</p></div>
          <div className="td" ><p>149 * 80 * 35 мм</p><p>2 шт</p></div>
      </div>
      
      </ div>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <style jsx>
        {
          `
          .tbody{
              display: flex;
              width:100%;
              flex-direction: column;
            }
            .tr{
              display: flex;
              min-height: 40px;
            }
            .td{
              word-wrap: break-word;
              border:1px solid black;
              display: flex;
              padding-left:5px;
              padding-top:10px;
              padding-bottom:10px;
              justify-content: center;
              flex-direction: column;
              width:50%;
            }
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              .td{
                word-wrap: break-word;
                border:1px solid black;
                display: flex;
                padding-left:0px;
                padding-top:0px;
                padding-bottom:0px;
                justify-content: center;
                flex-direction: column;
                width:50%;
              }
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  1:{
    id: 1,
    name: 'Набор радиобрелка 2 шт SEVEN LOCK SR-7714 ',
    description:"Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие. ",
    img_url:{
      0:'/static/products/1/1.jpg',
      1:'/static/products/1/2.jpg',
      2:'/static/products/1/3.jpg',
      3:'/static/products/1/4.jpg',
      4:'/static/products/1/5.jpg'
    },
    price: "600",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          2:{
            name:"Управление устройством ",
            type:"Радиобрелок"
          },
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          0:{
            name:"Длина",
            type:"60 мм"
          },
          1:{
            name:"Ширина",
            type:"26 мм"
          },
          3:{
            name:"Высота",
            type:"11 мм"
          },
          4:{
            name:"Вес",
            type:"0.023 кг"
          },
          
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности работы радиобрелка к электронному замку невидимке SEVEN LOCK SR-7714.</h3>
      <br/>
      <p>Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие.</p>
      <br/>
      <p>Брелок имеет уникальный динамический код, который дополнительно зашифрован 64 битным ключом, а это значит, что сигнал невозможно перехватить и использовать повторно.</p>
      <br/>
      <p>Световая индикация. При нажатии на кнопку индикатор загорается голубым цветом, когда батарейка разряжается - красным.</p>
      <br/>
      <p>Корпус выполнен из прочного пластика в металлической оправе.</p>
      <br/>
      <h3 style={{fontSize:"20px"}}>Основные характеристики радиобрелка к скрытому замку SEVEN LOCK:</h3>
      <br/>
      <li>Максимальная дальность работы до 50 м.</li>
      <li>Рабочая частота 433 МГц.</li>
      <li>Питание: батарейка CR 2032 - 1шт. </li>
      <li>Габариты: 60 х 26 х 11 мм.</li>
      <li>Вес 15 грамм.</li>
      <br/>
      <p>Как добавить радиобрелок к Умному замку SEVEN LOCK можно посмотреть на видео Сопряжение аксессуаров (брелки, которые входят в комплект к замку уже привязаны, сопрягать заново необходимо только при добавлении новых брелков или других аксессуаров):</p>
      <br/>
      
      <div style={{display:"flex",justifyContent:"center"}}>
      <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
     frameBorder='0'
     allow='autoplay; encrypted-media'
     allowFullScreen
     title='video'
     
   />
      </div>
      
        <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
   1:{
    id: 1,
    name: 'Набор радиобрелка 2 шт SEVEN LOCK SR-7714 ',
    description:"Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие. ",
    img_url:{
      0:'/static/products/1/1.jpg',
      1:'/static/products/1/2.jpg',
      2:'/static/products/1/3.jpg',
      3:'/static/products/1/4.jpg',
      4:'/static/products/1/5.jpg'
    },
    price: "600",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          2:{
            name:"Управление устройством ",
            type:"Радиобрелок"
          },
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          0:{
            name:"Длина",
            type:"60 мм"
          },
          1:{
            name:"Ширина",
            type:"26 мм"
          },
          3:{
            name:"Высота",
            type:"11 мм"
          },
          4:{
            name:"Вес",
            type:"0.023 кг"
          },
          
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности работы радиобрелка к электронному замку невидимке SEVEN LOCK SR-7714.</h3>
      <br/>
      <p>Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие.</p>
      <br/>
      <p>Брелок имеет уникальный динамический код, который дополнительно зашифрован 64 битным ключом, а это значит, что сигнал невозможно перехватить и использовать повторно.</p>
      <br/>
      <p>Световая индикация. При нажатии на кнопку индикатор загорается голубым цветом, когда батарейка разряжается - красным.</p>
      <br/>
      <p>Корпус выполнен из прочного пластика в металлической оправе.</p>
      <br/>
      <h3 style={{fontSize:"20px"}}>Основные характеристики радиобрелка к скрытому замку SEVEN LOCK:</h3>
      <br/>
      <li>Максимальная дальность работы до 50 м.</li>
      <li>Рабочая частота 433 МГц.</li>
      <li>Питание: батарейка CR 2032 - 1шт. </li>
      <li>Габариты: 60 х 26 х 11 мм.</li>
      <li>Вес 15 грамм.</li>
      <br/>
      <p>Как добавить радиобрелок к Умному замку SEVEN LOCK можно посмотреть на видео Сопряжение аксессуаров (брелки, которые входят в комплект к замку уже привязаны, сопрягать заново необходимо только при добавлении новых брелков или других аксессуаров):</p>
      <br/>
      
        <div style={{display:"flex",justifyContent:"center"}}>
            <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
        </div>
        <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  2:{
    id: 2,
    name: 'Радиобрелок SEVEN LOCK SR-7714',
    description:"Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие. ",
    img_url:{
      0:'/static/products/2/2.jpg',
      1:'/static/products/2/3.jpg',
      2:'/static/products/2/4.jpg',
      3:'/static/products/2/5.jpg',
      4:'/static/products/2/6.jpg'
    },
    price: "320",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          2:{
            name:"Управление устройством ",
            type:"Радиобрелок"
          },
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          0:{
            name:"Длина",
            type:"60 мм"
          },
          1:{
            name:"Ширина",
            type:"26 мм"
          },
          3:{
            name:"Высота",
            type:"11 мм"
          },
          4:{
            name:"Вес",
            type:"0.023 кг"
          },
          
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности работы радиобрелка к электронному замку невидимке SEVEN LOCK SR-7714.</h3>
      <br/>
      <p>Предназначен для управления Умным замком SEVEN LOCK SL-7709 и SL-7707. На корпусе расположены 2 кнопки - открытие и закрытие.</p>
      <br/>
      <p>Брелок имеет уникальный динамический код, который дополнительно зашифрован 64 битным ключом, а это значит, что сигнал невозможно перехватить и использовать повторно.</p>
      <br/>
      <p>Световая индикация. При нажатии на кнопку индикатор загорается голубым цветом, когда батарейка разряжается - красным.</p>
      <br/>
      <p>Корпус выполнен из прочного пластика в металлической оправе.</p>
      <br/>
      <h3 style={{fontSize:"20px"}}>Основные характеристики радиобрелка к скрытому замку SEVEN LOCK:</h3>
      <br/>
      <li>Максимальная дальность работы до 50 м.</li>
      <li>Рабочая частота 433 МГц.</li>
      <li>Питание: батарейка CR 2032 - 1шт. </li>
      <li>Габариты: 60 х 26 х 11 мм.</li>
      <li>Вес 15 грамм.</li>
      <br/>
      <p>Как добавить радиобрелок к Умному замку SEVEN LOCK можно посмотреть на видео Сопряжение аксессуаров (брелки, которые входят в комплект к замку уже привязаны, сопрягать заново необходимо только при добавлении новых брелков или других аксессуаров):</p>
      <br/>
      
        <div style={{display:"flex",justifyContent:"center"}}>
            <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
        </div>
        <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  3:{
    id: 3,
    name: 'Радиобрелок SEVEN LOCK SR-7714',
    description:"Модуль управления замком. Подходит для управления замком SEVEN LOCK SL-7709/SL-7707/SL-7708/SL-7704 по Bluetooth и Wi-Fi (опционально).",
    img_url:{
      0:'/static/products/3/1.jpg',
      
    },
    price: "847",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          0:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
          
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности модуля управления умными замками SEVEN LOCK SL-7707/SL-7709/SL-7704 со смартфона:</h3>
      <li>Модуль управления замком. Подходит для управления замком SEVEN LOCK <Link href="/product/0">SL-7709</Link>/SL-7707/SL-7708/SL-7704 по Bluetooth и Wi-Fi (опционально).</li>
      <li>Управление со смартфона Android/iOS через приложение. </li>
      <li>Питание: 4 батарейки 1.5V ААА (батарейки не входят в комплект). Подробнее: https://seven-systems.com.ua/p1300148527-modul-upravleniya-zamkom.html </li>
      <br/>
      <h3 style={{fontSize:"20px"}}>Преимущества модуля управления замком, открывающимся с телефона:</h3>
      <li>Автономное питание, нет необходимости включать устройство в розетку.</li>
      <li>Если пропадет электричество, устройство всегда будет работать.</li>
      <li>Если пропадет интернет, устройство всегда будет работать, так как управление происходит через Bluetooth.</li>
      <br/>
      <h3 style={{fontSize:"20px"}}>Управление замками невидимками SEVEN LOCK через Bluetooth с мобильного телефона:</h3>
      <li>Открытие и закрытие замка. </li>
      <li>Предоставление электронного ключа (права на управление замком для другого пользователя) временно или постоянно. Для этого другому человеку необходимо установить приложение для управления замком и создать учетную запись.</li>
      <li>Журнал открытий / закрытий замка. Вы можете просматривать через приложение кто и в какое время входил.</li>
      <br/>
      <h3 style={{fontSize:"20px"}}>Открытие и закрытие скрытых замков SEVEN LOCK через интернет:</h3>
      <p>Управление осуществляется через Wi-Fi при помощи шлюза SEVEN LOCK <Link href="/">SL-7734</Link>. Вы можете открывать и закрывать замок из любой точки мира. Данная функция является опциональной и шлюз приобретается отдельно</p>
      <br/>
      <h3>Комплектация модуля управления:</h3>
      <li>Модуль управления.</li>
      <li>Набор для установки.</li>
      <li>Инструкция пользователя.</li>
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  4:{
    id: 4,
    name: 'Биометрическая беспроводная клавиатура со встроенным считывателем SEVEN LOCK SK-7717 ',
    description:"беспроводной контроллер - клавиатуры SK-7717 со встроенным считывателем отпечатков пальцев для Умных замков SEVEN LOCK SL-7707 и SL-7709. ",
    img_url:{
      0:'/static/products/4/1.jpg',
      1:'/static/products/4/2.jpg',
      2:'/static/products/4/3.jpg',
      3:'/static/products/4/4.jpg',
      
    },
    price: "1600",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          2:{
            name:"Применение замка",
            type:"Стеклянная дверь, Металлическая дверь, Деревянная дверь "
          },
          
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          0:{
            name:"Питание",
            type:"Батарейки одноразовые "
          },
          1:{
            name:"Длина",
            type:"148 мм"
          },
          2:{
            name:"Ширина",
            type:"43.5 мм"
          },
          3:{
            name:"Высота",
            type:"22 мм"
          },
          3:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности беспроводного контроллера - клавиатуры SK-7717 со встроенным считывателем отпечатков пальцев для Умных замков SEVEN LOCK SL-7707 и SL-7709. </h3>
      <li>Открытие замка PIN код 4-8 символов.   </li>
      <li>Открытие замка с помощью RFID  EM-Marin 125 КГц брелков или карточек.  </li>
      <li>Открытие замка  PIN код + RFID брелки + отпечатки пальцев.  </li>
      <li>Количество пользователей - 500 ключей доступа или PIN кодов, 100 отпечатков пальцев. </li>
      <li>В комплекте элемент питания - 1,5В ААА 3шт.  </li>
      <li>Материал корпуса - металл + каленое стекло.   </li>
      <li>Габариты: 148 х 43,5 х 22 мм. </li>
      <li>Вес 330 грамм. </li>
     
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  5:{
    id: 5,
    name: 'Беспроводная клавиатура со встроенным считывателем SEVEN LOCK SK-7712b',
    description:"контроллер - клавиатуры SK-7717 для Умных замков SEVEN LOCK SL-7707 и SL-7709. ",
    img_url:{
      0:'/static/products/5/1.jpg',
      1:'/static/products/5/2.jpg',
      2:'/static/products/5/3.jpg',
      
      
    },
    price: "700",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Южная Корея"
          },
          2:{
            name:"Применение замка",
            type:"Стеклянная дверь, Металлическая дверь, Деревянная дверь "
          },
          3:{
            name:"Материал замка",
            type:"ABS-пластик"
          },
          4:{
            name:"Цвет замка",
            type:"Черный"
          },
          5:{
            name:"Тип установки замка",
            type:"	Накладной"
          },
          
        }
      },
      1:{
        name:"Дополнительные",
        info:{
          0:{
            name:"Управление устройством",
            type:"СКУД (опционально), Кнопки консоли"
          },
        }
      },
      2:{
        name:"Общие",
        info:{
          
          0:{
            name:"Питание",
            type:"Батарейки одноразовые "
          },
          1:{
            name:"Длина",
            type:"135 мм"
          },
          2:{
            name:"Ширина",
            type:"35 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.09 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности беспроводного контроллера - клавиатуры SK-7717 со встроенным считывателем отпечатков пальцев для Умных замков SEVEN LOCK SL-7707 и SL-7709. </h3>
      <li>Открытие замка PIN код 4-8 символов.   </li>
      <li>Открытие замка с помощью RFID  EM-Marin 125 КГц брелков или карточек.  </li>
      <li>Открытие замка  PIN код + RFID брелки </li>
      <li>Количество пользователей - 100 шт.</li>
      <li>В комплекте элемент питания - 1,5В ААА 3шт.  </li>
      <li>Материал корпуса - пластик. </li>
      <li>Габариты: 135 х 35 х 15 мм.</li>
      <li>Вес 90 грамм.</li>
      <li>Цвет черный.</li>
      <br/>
      
        <div style={{display:"flex",justifyContent:"center"}}>
            <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
        </div>
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  6:{
    id: 6,
    name: 'Беспроводная клавиатура со встроенным считывателем SEVEN LOCK SK-7712b',
    description:"беспроводной контроллер - клавиатуры SK-7717 для Умных замков SEVEN LOCK SL-7707 и SL-7709. ",
    img_url:{
      0:'/static/products/6/1.jpg',
      1:'/static/products/6/2.jpg',
      2:'/static/products/6/3.jpg',
      
      
    },
    price: "700",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Южная Корея"
          },
          2:{
            name:"Применение замка",
            type:"Стеклянная дверь, Металлическая дверь, Деревянная дверь "
          },
          3:{
            name:"Материал замка",
            type:"ABS-пластик"
          },
          4:{
            name:"Цвет замка",
            type:"Белый"
          },
          5:{
            name:"Тип установки замка",
            type:"	Накладной"
          },
          
        }
      },
      1:{
        name:"Дополнительные",
        info:{
          0:{
            name:"Управление устройством",
            type:"СКУД (опционально), Кнопки консоли"
          },
        }
      },
      2:{
        name:"Общие",
        info:{
          
          0:{
            name:"Питание",
            type:"Батарейки одноразовые "
          },
          1:{
            name:"Длина",
            type:"135 мм"
          },
          2:{
            name:"Ширина",
            type:"35 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.09 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности беспроводного контроллера - клавиатуры SK-7717 со встроенным считывателем отпечатков пальцев для Умных замков SEVEN LOCK SL-7707 и SL-7709. </h3>
      <li>Открытие замка PIN код 4-8 символов.   </li>
      <li>Открытие замка с помощью RFID  EM-Marin 125 КГц брелков или карточек.  </li>
      <li>Открытие замка  PIN код + RFID брелки </li>
      <li>Количество пользователей - 100 шт.</li>
      <li>В комплекте элемент питания - 1,5В ААА 3шт.  </li>
      <li>Материал корпуса - пластик. </li>
      <li>Габариты: 135 х 35 х 15 мм.</li>
      <li>Вес 90 грамм.</li>
      <li>Цвет белый.</li>
      <br/>
      
        <div style={{display:"flex",justifyContent:"center"}}>
            <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
        </div>
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  7:{
    id: 7,
    name: 'Модуль интеграции SEVEN LOCK m-7711wi',
    description:"SEVEN Lock m-7717wi - это проводной модуль интеграции с умным домом, сигнализациями Ajax, Дунай и другими системами. ",
    img_url:{
      0:'/static/products/7/1.jpg',
      1:'/static/products/7/2.jpg',
      
      
      
    },
    price: "490",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          
          2:{
            name:"Материал замка",
            type:"ABS-пластик"
          },
          3:{
            name:"Цвет замка",
            type:"Белый"
          },
          4:{
            name:"Открытие устройства",
            type:"Кнопкой"
          },
          5:{
            name:"Тип установки замка",
            type:"	Накладной"
          },
          
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          
          0:{
            name:"Длина",
            type:"82 мм"
          },
          2:{
            name:"Ширина",
            type:"39 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.035 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          6:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          7:{
            name:"Напряжение",
            type:"3 В"
          },
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>SEVEN Lock m-7717wi - это проводной модуль интеграции с умным домом, сигнализациями Ajax, Дунай и другими системами.</h3>
      <li>Материал корпуса - пластик.   </li>
      <li>Элемент питания CR 2032 - 1шт. </li>
      <li>Вес 90 грамм.</li>
      <li>Цвет - белый.</li>
      
      
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  8:{
    id: 8,
    name: 'Беспроводная кнопка SEVEN LOCK SB-7711b ',
    description:"SEVEN Lock m-7717b - это проводной модуль интеграции с умным домом, сигнализациями Ajax, Дунай и другими системами. ",
    img_url:{
      0:'/static/products/8/1.jpg',
      1:'/static/products/8/2.jpg',
      
      
      
    },
    price: "490",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          
          2:{
            name:"Материал замка",
            type:"ABS-пластик"
          },
          3:{
            name:"Цвет замка",
            type:"Черный"
          },
          4:{
            name:"Открытие устройства",
            type:"Кнопкой"
          },
          5:{
            name:"Тип установки замка",
            type:"	Накладной"
          },
          
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          
          0:{
            name:"Длина",
            type:"82 мм"
          },
          2:{
            name:"Ширина",
            type:"39 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.035 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          6:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          7:{
            name:"Напряжение",
            type:"3 В"
          },
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>SEVEN Lock m-7717wi - это проводной модуль интеграции с умным домом, сигнализациями Ajax, Дунай и другими системами.</h3>
      <li>Питание 3В батарейка 2032 1шт.</li>
      <li>Габариты: 82 х 39 х 15 мм.</li>
      <li>Вес: 35 грамм.</li>
      <li>Цвет - Черный.</li>
      
      
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  9:{
    id: 9,
    name: 'Беспроводная кнопка SEVEN LOCK SB-7711w',
    description:"Беспроводная кнопка SEVEN SB-7711b с защитой от перехвата для Умного замка SEVEN Lock SL-7707 и SEVEN Lock SL-7709.",
     img_url:{
      0:'/static/products/9/1.jpg',
      1:'/static/products/9/2.jpg',
      
      
      
    },
    price: "490",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Китай"
          },
          
          2:{
            name:"Материал замка",
            type:"ABS-пластик"
          },
          3:{
            name:"Цвет замка",
            type:"Белый"
          },
          4:{
            name:"Открытие устройства",
            type:"Кнопкой"
          },
          5:{
            name:"Тип установки замка",
            type:"	Накладной"
          },
          
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          
          0:{
            name:"Длина",
            type:"82 мм"
          },
          2:{
            name:"Ширина",
            type:"39 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.035 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          6:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          7:{
            name:"Напряжение",
            type:"3 В"
          },
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Беспроводная кнопка SEVEN SB-7711b с защитой от перехвата для Умного замка SEVEN Lock SL-7707 и SEVEN Lock SL-7709.</h3>
      <li>Материал корпуса - пластик.   </li>
      <li>Элемент питания CR 2032 - 1шт. </li>
      <li>Вес 90 грамм.</li>
      <li>Цвет - белый.</li>
      
      
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  
  10:{
    id: 10,
    name: 'Комплект сигнализации Ajax с замком SEVEN LOCK для дома',
    description:"Все датчики Ajax обмениваются данными с централью Ajax Hub по зашифрованному радиопротоколу Jeweller. Радиус работы системы может достигать 2000 метров на открытом пространстве, что позволяет установить датчики на нескольких этажах дома или бизнес-центра.",
      img_url:{
      0:'/static/products/10/1.jpg',
      1:'/static/products/10/2.jpg',
      2:'/static/products/10/3.jpg',
      3:'/static/products/10/4.jpg',
      4:'/static/products/10/5.jpg',
      
      
      
    },
    price: "8 997",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Основные атрибуты",
            type:"Украина"
          },
          
          2:{
            name:"Тип системы/сигнализации",
            type:"Адресно-цифровая"
          },
          3:{
            name:"Управление",
            type:"Сетевое"
          },
          4:{
            name:"Интерфейс",
            type:"Беспроводной"
          },
          5:{
            name:"Протокол связи",
            type:"GSM"
          },
          6:{
            name:"Индикация режима работы",
            type:"Да"
          },
          5:{
            name:"Возможность расширения",
            type:"Да"
          },
          5:{
            name:"Возможность для интеграции",
            type:"Да"
          },
        }
      },
      
      1:{
        name:"Общие",
        info:{
          
          
          0:{
            name:"Длина",
            type:"82 мм"
          },
          2:{
            name:"Ширина",
            type:"39 мм"
          },
          3:{
            name:"Высота",
            type:"15 мм"
          },
          4:{
            name:"Вес",
            type:"0.035 кг"
          },
          5:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Основные принципы работы комплекта</h3>
      <li>Управление сигнализацией через мобильное приложение.</li>
      <li>Удобство использования. При снятии с сигнализации замок тоже автоматически открывается. </li>
      <li>Управлять  замком можно отдельно с помощью брелка или мобильного приложения.</li>
      <li>Есть возможность расширения системой видеонаблюдения (дополнительно можно подключить любую IP камеру SEVEN).</li>
      <br/>
      <h3 style={{fontSize:"20px"}}>В комплект входит:</h3>
      <li>Датчик движения Ajax MotionProtect.</li>
      <li>Умный замок SEVEN LOCK SL-7709.</li>
      <li>Модуль интеграции SEVEN Lock m-7711wi.</li>
      <li>Радиоканальный контроллер Ajax Relay.</li>
      <li>Блок питания (опционально).</li>
      <br/>
      <h3 style={{fontSize:"20px"}}>Основные преимущества сигнализации Ajax</h3>
      <li>Сертифицированная сигнализация профессионального уровня надежности Grade 2;</li>
      <li>Возможность подключить к пульту охранной компании (государственной или частной);</li>
      <li>Два активных канала связи — GSM и Ethernet;</li>
      <li>Моментальная отправка сигналов тревоги;</li>
      <li>Уведомление о тревогах с помощью SMS, push-сообщений и звонка на номер владельца;</li>
      <li>Удобное управление и настройка с помощью мобильного приложения на iOS и Android;</li>
      <li>Самостоятельная установка системы за 15 минут.</li>
      <br/>
      <p>
        В приложении можно смотреть в реальном времени видеопоток с видеокамер, которые поддерживают протокол RTSP.
      </p>
      <br/>
      <h3 style={{fontSize:"20px"}}>Надежность системы Ajax</h3>
      <br/>
      <p>
      Все датчики Ajax обмениваются данными с централью Ajax Hub по зашифрованному радиопротоколу Jeweller. Радиус работы системы может достигать 2000 метров на открытом пространстве, что позволяет установить датчики на нескольких этажах дома или бизнес-центра.
      </p>
      <br/>
      <p>
      Jeweller предлагает продвинутый уровень безопасности. Благодаря ему охранная система Ajax моментально реагирует и сообщает о первых признаках вторжения, пожара и затопления. При этом сигнализация надежно защищена от саботажа — владелец и пульт охраны мгновенно узнают о попытке глушения радиосигнала, пропаже питания или вскрытии датчика.
      </p>
      <br/>
      <p>
      Jeweller позволяет круглосуточно контролировать работоспособность датчиков с помощью частого периода опроса, который настраивается до минимальных 12 секунд. Если датчик вышел из строя или уничтожен, система оповестит об этом за миллисекунды. 
      </p>
      <br/>
      <h3 style={{fontSize:"20px"}}>Технологии Ajax</h3>
      <li>Двусторонняя связь, обеспечивающая круглосуточный контроль системы;</li>
      <li>Настраиваемый опрос датчиков от 12 секунд;</li>
      <li>Два активных канала связи — GSM и Ethernet;</li>
      <li>«Облачный» сервер для быстрой конфигурации системы;</li>
      <li>Дополнительный аккумулятор для автономной работы системы в течении 15 часов;</li>
      <li>Частотный хоппинг для переключения на чистую частоту при глушении;</li>
      <li>Автоматическое обновление прошивки Ajax Hub;</li>
      <li>Функция Geofence, которая напомнит включить/отключить режим охраны.</li>
      <li>Простая инсталляция благодаря креплениям SmartBracket;</li>
      <li>Подключение до 100 устройств к системе в один клик с помощью QR-кодов;</li>
      <li>Беспроводная технология Jeweller позволяет раскинуть сеть на расстоянии до 2000 метров на открытом пространстве или на нескольких этажах бизнес-центра;</li>
      <li>УВремя работы на резервном питании достигает 10 часов.</li>
      <div style={{display:"flex", justifyContent:"center"}}>
        <img src="/static/products/10/img1.jpg" style={{margin:"auto", width:"100%", maxWidth:"400px"}}/>
      </div>
      
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  11:{
    id: 11,
    name: 'Комплект сигнализации Ajax с замком SEVEN LOCK для дома',
    description:"беспроводной контроллер - клавиатуры SK-7713 со встроенным считывателем для Умных замков SEVEN LOCK SL-7707 и SL-7709.",
    img_url:{
      0:'/static/products/11/1.jpg',
      1:'/static/products/11/2.jpg',
      2:'/static/products/11/3.jpg',
      3:'/static/products/11/4.jpg',
      4:'/static/products/11/5.jpg',
      
      
      
    },
    price: "1 100",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Основные атрибуты",
            type:"Южная Корея"
          },
          
          2:{
            name:"Применение замка",
            type:"Стеклянная дверь, Металлическая дверь, Деревянная дверь"
          },
          3:{
            name:"Цвет замка",
            type:"Серебро"
          },
          
        }
      },
      
      1:{
        name:"Дополнительные",
        info:{
          
          
          0:{
            name:"Управление устройством",
            type:"СКУД (опционально), Кнопки консоли"
          },
          
          
        }
      },
      2:{
        name:"Комплектация",
        info:{
          
          
          0:{
            name:"Корпус замка",
            type:"Да"
          },
          2:{
            name:"Инструкция по установке/эксплуатации",
            type:"Да"
          },
          3:{
            name:"Батарейки",
            type:"ААА"
          },
          
        }
      },
      3:{
        name:"Общие",
        info:{
          
          
          0:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          1:{
            name:"Длина",
            type:"147 мм"
          },
          2:{
            name:"Ширина",
            type:"56 мм"
          },
          3:{
            name:"Высота",
            type:"21 мм"
          },
          0:{
            name:"Вес",
            type:"0.382 кг"
          },
          0:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription1">
      <br/>
      <h3 style={{fontSize:"20px"}}>Особенности беспроводного контроллера - клавиатуры SK-7713 со встроенным считывателем для Умных замков SEVEN LOCK SL-7707 и SL-7709.</h3>
      <li>Открытие замка PIN код 4-8 символов.  </li>
      <li>Открытие замка с помощью RFID  EM-Marin 125 КГц брелков или карточек.  </li>
      <li>Открытие замка  PIN код + RFID брелки. </li>
      <li>Количество пользователей - 500 шт.</li>
      <li>В комплекте элемент питания - 1,5В ААА 3шт. </li>
      <li>Материал корпуса - металл.</li>
      <li>Габариты: 147 х 56 х 21 мм.</li>
      <li>Вес 382 грамм. </li>
      <div style={{display:"flex",justifyContent:"center"}}>
            <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
        </div>
      <style jsx>
        {
          `
          
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              
            }
          `
        }
      </style>
    </div>
    

  
  
  },
  12:{
    id: 12,
    name: 'Умный замок SEVEN Lock SL-7707',
    description:"принципиально новый и улучшенный вид скрытых замков на рынке, который уже давно используется в Европе и США. Это электронное накладное устройство с пультом, которое совершенно не видно с наружной стороны двери. Красивый дизайн идеально впишется в любой интерьер вашего дома.",
    img_url:{
      0:'/static/products/12/1.jpg',
      1:'/static/products/12/2.jpg',
      2:'/static/products/12/3.jpg',
      3:'/static/products/12/4.jpg',
      4:'/static/products/12/5.jpg'
    },
    price: "4 777",
    created_at: Date.now(),
    updated_at: Date.now(),
    categories:'"Умные замки" (невидимки)',
    about:{
      0:{
        name:"Основные",
        info:{
          0:{
            name:"Производитель",
            type:"SEVEN Lock"
          },
          1:{
            name:"Страна производитель",
            type:"Южная Корея"
          },
          2:{
            name:"Класс защиты замка",
            type:"4"
          },
          3:{
            name:"Открытие блока",
            type:"Универсальное"
          },
          4:{
            name:"Цвет замка",
            type:"Золото матовое"
          },
          5:{
            name:"Открытие устройства",
            type:"С мобильного телефона, Радиобрелком "
          },
          6:{
            name:"Управление устройством",
            type:"Радиобрелок, Мобильный телефон (опционально), СКУД (опционально)"
          },
          7:{
            name:"Интерфейс",
            type:"Беспроводной"
          },
          8:{
            name:"Тип установки замка",
            type:"Накладной"
          }
        }
      },
      1:{
        name:"Дополнительные",
        info:{
          0:{
            name:"Индикация открытия/закрытия",
            type:"Звуковая/Световая"
          }
        }
      },
      2:{
        name:"Комплектация",
        info:{
          0:{
            name:"Корпус замка",
            type:"Да"
          },
          1:{
            name:"Радиобрелок",
            type:"2"
          },
          2:{
            name:"Ответная планка",
            type:"1"
          },
          3:{
            name:"Крепежный комплект",
            type:"Да"
          },
          4:{
            name:"Инструкция по установке/эксплуатации",
            type:"Да"
          },
          5:{
            name:"Батарейки",
            type:"АА"
          },
          
        }
      },
      3:{
        name:"Общие",
        info:{
          0:{
            name:"Питание",
            type:"Батарейки одноразовые"
          },
          1:{
            name:"Контроль разряда",
            type:"Да"
          },
          2:{
            name:"Максимальная рабочая температура",
            type:"60 град."
          },
          3:{
            name:"Длина",
            type:"149 мм"
          },
          4:{
            name:"Ширина",
            type:"80 мм"
          },
          5:{
            name:"Высота",
            type:"32 мм"
          },
          6:{
            name:"Вес",
            type:"1 кг"
          },
          7:{
            name:"Гарантийный срок",
            type:"12 мес"
          },
          
        }
      },
    },
    detaildescription:
    <div style={{width:"100%",color:"#666666"}} key="detaildescription0">
      <p>Новую модель замка SEVEN LOCK можно посмотреть по ссылке: <Link href="/product/0">Умный замок SEVEN LOCK SL-7709</Link></p>
      <br/>
      <Link href="/product/0">
      <div style={{display:"flex",justifyContent:"center"}}>
        <img src="/static/products/12/img1.jpg" style={{margin:"auto", width:"100%", maxWidth:"200px"}}/>
      </div>
      </Link>
      
      <br/> 
      <p>
      Умный замок невидимка SEVEN LOCK SL-7709
      – принципиально новый и улучшенный вид скрытых замков на рынке, который уже давно используется в Европе и США. Это электронное накладное устройство с пультом, которое совершенно не видно с наружной стороны двери. Красивый дизайн идеально впишется в любой интерьер вашего дома
      </p> 
      <br/>
      <p style={{color:"#666666"}}>
        Есть возможность интеграции с Умным домом SEVEN HOME, сигнализациями Ajax, Дунай и другими системами (опционально).
      </p>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/oIyGbzm0ITA'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
       <br/>
       <h1 style={{color:"#666666"}}>Автономный беспроводной замок SEVEN Lock SL-7707 является универсальным:</h1>
      <br/>
      <div>
        <p>1.Можно устанавливать на дверь как с левым, так и с правым открытием (можно просто перевернуть замок, вверх ногами он тоже работает :-), значки на замке симметричны).</p>
        <p>2.Есть функция автозакрытия, когда замок закрывается автоматически при захлопывании двери (для тех, кто постоянно забывает закрыл он дверь или нет) либо без автозакрытия, когда замок можно закрыть только при помощи радиобрелка (для тех, кто может выйти из дома без ключа). Автозакрытие отключается кнопкой. Магнит вынимать не нужно.</p>
        <p>3.Есть функция «антипаника» - в экстренных ситуациях быстрое открытие двери нажатием на специальную кнопку сверху (в повседневной жизни не рекомендуем использовать без необходимости). </p>
        <p>4.Умные замки SEVEN Lock могут также опционально открываться при помощи:</p>
          <li>Биометрии лица или отпечатка пальца</li>
          <li>Звонком с телефона, sms либо с мобильного приложения через интернет</li>
          <li>Картой, брелком или пин-кодом</li>
          
      </div>
      <br/>
      <h1>Подходит как для входных и межкомнатных дверей в квартиру, так и в офис.</h1>
      <br/>
      <p>
      Также если вы хотите дополнительно обезопасить свою квартиру, то есть возможность расширения за счет установки охранной сигнализации Ajax. Вы просто подключаете замок невидимку в общую систему управления сигнализацией.
      </p>
      <br/>
      <h1>Основными преимуществами скрытых замков перед привычными дверными являются: </h1>
      <br/>
      <h3 style={{fontSize:"20px"}}>Отсутствие замочной скважины</h3>
      <p>В этом случае у грабителя просто нет возможности вскрыть вашу дверь, так как нельзя взломать то, чего не видно. Надежная защита, когда вы отсутствуете дома </p>
      <br/>
      <h3>Радиобрелок работает по динамическому коду</h3>
      <p>Это означает, что один сигнал невозможно перехватить и использовать повторно </p>
      <br/>
      <h3>Прост в установке</h3>
      <p>Не требует прокладки проводов, так как работает от батареек. Когда батареи разряжаются, замок сигнализирует на протяжении 2-3х недель. В этом случае необходимо поменять батарейки. Даже если вы не успели это сделать, то замок просто откроется</p>
      <br/>
      <h3>Зацеп якорного типа</h3>
      <p>Зацеп якорного типа не позволит злоумышленнику вскрыть дверь ломом</p>
      <br/>
      <h3>Подходит на любой тип двери</h3>
      <p>Вы можете установить замок на любую дверь (металлическую, стальную, железную, деревянную, пластиковую), в том числе и на стеклянную (в данном случае есть возможность установки на крепкий 3М скотч без сверления)</p>
      <br/>
      <h3>Сенсорные кнопки</h3>
      <p>Есть сенсорные кнопки открытия и закрытия для удобства выхода</p>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/zaK--tvcWn0'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <br/>
      <h1 style={{fontSize:"25"}}>Умный дом</h1>
      <p>Скрытый замок является одним из элементов умного дома. Он может открываться при помощи мобильного телефона. Для этого необходимо купить Модуль управления замком SEVEN Lock m-7717 и установить приложение в смартфон. Вы сможете через интернет дистанционно управлять работой секретного замка из любой точки мира.</p>
      <br/>
      <h1>Замок поставляется в полной комлектации:</h1>
      <li>Радиоуправляемый замок SEVEN Lock SL-7707 – 1шт</li>
      <li>Радиобрелок – 2 шт. (есть возможность приобрести дополнительно, если надо больше)</li>
      <li>Все необходимое для установки самостоятельно (монтажная пластина, ответная накладка, усиливающая пластина, установочные кольца, 3М наклейка, винты для крепления замка, шурупы, заклепки вытяжные).</li>
      <li>Батарейки АА – 2 шт.</li>
      <li>Руководство пользователя.</li>
      <li>Гарантийный талон.</li>
      <br/>
      <h1>Также дополнительно вы можете подключить в систему целый ряд аксессуаров (например,<Link href={`/product/8`}>кнопка выхода</Link>, <Link href={`/`}>кодовая клавиатура</Link>).</h1>
      
      <br/><br/>
      <h1 style={{fontSize:"20px"}}>Технические характеристики скрытого замка SEVEN LOCK SL-7709:</h1>
      
      < div className="tbody" >
      <div className="tr" >
          <div className="td" >Частота передачи сигнала управления </div>
          <div className="td" >динамический код, 433 МГц</div>
      </div>
      <div className="tr" >
          <div className="td" >Дальность передачи сигнала управления</div>
          <div className="td" >до 50 метров</div>
      </div>
      <div className="tr" >
          <div className="td" >Питание</div>
          <div className="td" >2 элемента питания типа АА</div>
      </div>
      <div className="tr" >
          <div className="td" >Ток потребления холостого хода</div>
          <div className="td" >≥ 10 мкА</div>
      </div>
      <div className="tr" >
          <div className="td" >Ток потребления в рабочем режиме:<p>- автономный замок SEVEN LOCK</p><p>- радиобрелок</p></div>
          <div className="td" ><p>≥ 42 мА</p><p>≥ 3 мА</p></div>
      </div>
      <div className="tr" >
          <div className="td" >Срок службы от батарей</div>
          <div className="td" >до одного года</div>
      </div>
      <div className="tr" >
          <div className="td" >Кнопки открытия/закрытия</div>
          <div className="td" >две сенсорные кнопки на корпусе замка</div>
      </div>
      <div className="tr" >
          <div className="td" >Усилие на разрыв</div>
          <div className="td" >1000 кг</div>
      </div>
      <div className="tr" >
          <div className="td" >Рабочие условия</div>
          <div className="td" >0°C - +60°C, влажность 10% - 90%</div>
      </div>
      <div className="tr" >
          <div className="td" >
            <p>Вес нетто:</p>
            <p>- автономный замок SEVEN LOCK</p>
            <p>- радиобрелок</p>
          </div>
          <div className="td" ><p>800 гр</p><p>25 гр</p></div>
      </div>
      <div className="tr" >
          <div className="td" ><p>Габаритные размеры</p><p>Количество брелков в комплекте</p></div>
          <div className="td" ><p>149 * 80 * 35 мм</p><p>2 шт</p></div>
      </div>
      
      </ div>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/yCx2w7p892A'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe src='https://www.youtube.com/embed/6utwhrlXTuw'
     
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          
        />
      </div>
      <style jsx>
        {
          `
          .tbody{
              display: flex;
              width:100%;
              flex-direction: column;
            }
            .tr{
              display: flex;
              min-height: 40px;
            }
            .td{
              word-wrap: break-word;
              border:1px solid black;
              display: flex;
              padding-left:5px;
              padding-top:10px;
              padding-bottom:10px;
              justify-content: center;
              flex-direction: column;
              width:50%;
            }
            iframe{
              width:560px;
              height:315px;
            }
            @media (max-width: 1000px){
              iframe{
                width:100%;
                height:315px;
              }
              .td{
                word-wrap: break-word;
                border:1px solid black;
                display: flex;
                padding-left:0px;
                padding-top:0px;
                padding-bottom:0px;
                justify-content: center;
                flex-direction: column;
                width:50%;
              }
            }
          `
        }
      </style>
    </div>
    

  
  
  },
};

export default offlineProducts;
