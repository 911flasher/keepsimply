import ErrorAlert from '../../components/alerts/error';
import Page from '../../components/page';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import offlineProducts from '../../db/offlineData/products';
import {keys} from "lodash"
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const matches = useMediaQuery('(max-width: 1000px)');
  
  const [param, setparam]=useState("");
  const router = useRouter();

  

  
  
  useEffect(() => {
    
    if (router && router.query) {
     
     setparam(router.query.param);
    }
   }, [router]);
   
   const {
     id
   }=router.query
   let temp
   if(!matches&&id!=undefined){
    if(offlineProducts[id]!=undefined){
      temp=keys(offlineProducts[id].img_url)[0]
    }
    else
      temp=NaN
   }
   else
    temp=NaN
   
  

  const [img=temp, setimg]=useState();

  if(!matches&&id!=undefined)
   if(offlineProducts[id]!=undefined){
     
    return (
      <Page title={offlineProducts[id].name}>
        
        
        <article>
        
  
          <div className="product-img-box">
            
            <img className="product-img" src={offlineProducts[id].img_url[img]} />
            <div className="product-img-box-bar">
              {
                keys(offlineProducts[id].img_url).map((index)=>
                <div className="product-img-box-bar-ico" key={index} onClick={()=>setimg(index)}>
                  <img className="product-img-ico" src={offlineProducts[id].img_url[index]} />
                </div>
                )
              }
              
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{offlineProducts[id].name}</h1>
  
            <h3 className="product-description">
              {offlineProducts[id].description}
            </h3>
  
          
  
            <div className="price">
              <p className="price-value">{offlineProducts[id].price}{" "}ГРН.</p>
            </div>
          </div>
          
  
          <style jsx>{`
          
            article {
              width:100%;
              
              display: flex;
              
              align-items: center;
              justify-content: space-between;
              box-sizing: border-box;
              
              width: 100%;
              padding: 24px;
              background: white;
              box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
              border-radius: 6px;
            }
            .product-info{
              display: flex;
              align-items: flex-end;
              flex-direction: column;
              width: 50%;
            }
            
            .product-img-box {
              display: flex;
              width: 50%;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 28px;
            }
            .product-img-box-bar {
              display: flex;
              height: 80px;
              
              width: 100%;
              align-items: center;
              justify-content: center;
            }
            .product-img-box-bar-ico{
              height: 100%;
              border-radius: 6px;
              overflow: hidden;
              border: 1px solid;
              margin-left: 5px;
              cursor: pointer;
            }
            .product-img-ico{
              height: 100%;
              object-fit: contain;
            }
            .product-img {
              width: 480px;
              height: 345px;
              object-fit: contain;
            }
            .product-name {
              text-align: right;
              line-height: 20px;
              text-decoration: none;
              font-weight: 500;
              font-size: 22px;
              
              color: #666666;
              margin-bottom: 28px;
            }
            .product-description {
              width: 50%;
              
              text-align: right;
              line-height: 22px;
              text-decoration: none;
              font-weight: 400;
              font-size: 14px;
              
              color: #666666;
              margin-bottom: 24px;
            }
            
            .price {
              text-align: right;
              display:flex;
              justify-content: flex-end;
              font-weight: 900;
              font-size: 20px;
              color: #666666;
              margin-bottom: 20px;
            }
            
          `}</style>
        </article>
        <div className="about">
        <div className="Maintitle"><h1>Характеристики</h1></div>
          {
            keys(offlineProducts[id].about).map((title)=>
            <>
              <div className="title" key={title}>
                <p>{offlineProducts[id].about[title].name}</p>
              </div>
              {
                keys(offlineProducts[id].about[title].info).map((index)=>
                <div className="row" key={index}>
                  <div className="col">
                    <p>{offlineProducts[id].about[title].info[index].name}</p>
                  </div>
                  <div className="col">
                    <p>{offlineProducts[id].about[title].info[index].type}</p>
                  </div>
                </div>
                )
              }
            </>
            )
          }
          
          
          <style jsx>
            {
              `
              .about{
                width:80%;
                margin: auto;
  
                background: white;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
                box-sizing: border-box;
                border-radius: 6px;
                margin-top: 24px;
                display: flex;
                flex-direction: column;
              }
              .Maintitle{
                margin:auto;
                margin-top: 24px;
                font-size: 22px;
              }
              .title{
                display: flex;
                align-items: center;
                height: 40px;
                width:100%;
                border-bottom: 0.5px solid #919191;
              }
              .title>p{
                margin-left:10px;
              }
              .row{
                display: flex;
                align-items: center;
                height: 40px;
                width:100%;
                border-bottom: 0.5px solid #919191;
              }
              
              .col{
                display: flex;  
                height: 100%;
                width:100%;
                align-items: center;
              }
              .col>p{
                margin-left:10px;
              }
              `
            }
          </style>
        </div>
      </Page>
    );
   }
  
  
  if(matches&&id!=undefined)
    if(offlineProducts[id]!=undefined){
      return (
        <Page title={offlineProducts[id].name}>
          
          
          <article>
          
    
          <div className="product-img-box">
            
            <img className="product-img" src={offlineProducts[id].img_url[img]} />
            <div className="product-img-box-bar">
              {
                keys(offlineProducts[id].img_url).map((index)=>
                <div className="product-img-box-bar-ico" key={index} onClick={()=>setimg(index)}>
                  <img className="product-img-ico" src={offlineProducts[id].img_url[index]} />
                </div>
                )
              }
              
            </div>
          </div>
            <div className="product-info">
              <h1 className="product-name">{offlineProducts[id].name}</h1>
    
              <h3 className="product-description">
                {offlineProducts[id].description}
              </h3>
    
            
    
              <div className="price">
                <p className="price-value">UAN{" "}{offlineProducts[id].price}</p>
              </div>
            </div>
            
    
            <style jsx>{`
            @media (max-width: 1000px) {
              article {
                width: 100%;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
              .product-info{
                text-align: center;
                align-content: center;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                
              }
              .product-img-box {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 28px;
              }
              .product-img-box-bar {
                display: flex;
                height: 40px;
                
                width: 100%;
                
              }
              .product-img-box-bar-ico{
                height: 100%;
                border-radius: 6px;
                overflow: hidden;
                
                margin-left: 5px;
                cursor: pointer;
              }
              .product-img-ico{
                height: 100%;
                object-fit: contain;
              }
              
              .product-img {
                width: 225px;
                height: 180px;
                margin-bottom: 28px;
              }
              .product-name {
               
                text-align: center;
                line-height: 20px;
                text-decoration: none;
                font-weight: 500;
                font-size: 18px;
                
                color: #666666;
                margin-bottom: 18px;
              }
              .product-description {
                
                
                
                line-height: 22px;
                text-decoration: none;
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                color: #666666;
    
                margin-bottom: 18px;
              }
              .price {
                text-align: center;
    
              }
            }
              
              
            `}</style>
          </article>
          <div className="about">
            <div className="Maintitle"><h1>Характеристики</h1></div>
            {
              keys(offlineProducts[id].about).map((title)=>
              <>
                <div className="title" key={title}>
                  <p>{offlineProducts[id].about[title].name}</p>
                </div>
                {
                  keys(offlineProducts[id].about[title].info).map((index)=>
                  <div className="row" key={index}>
                    <div className="col">
                      <p>{offlineProducts[id].about[title].info[index].name}</p>
                    </div>
                    <div className="col">
                      <p>{offlineProducts[id].about[title].info[index].type}</p>
                    </div>
                  </div>
                  )
                }
              </>
              )
            }
            
            
            <style jsx>
              {
                `
                @media (max-width: 1000px) {
                  .about{
                      width:100%;
                      
                      
                      background: none;
                      box-shadow: none;
                      box-sizing: border-box;
                      border-radius: 6px;
                      margin-top: 24px;
                      display: flex;
                      flex-direction: column;
                      
                    }
                    .Maintitle{
                      margin:auto;
                      margin-top: 24px;
                      font-size: 22px;
                    }
                    .title{
                      display: flex;
                      align-items: center;
                      min-height: 40px;
                      width:100%;
                      border-bottom: 0.5px solid #919191;
                    }
                    .title>p{
                      margin-left:10px;
                    }
                    .row{
                      display: flex;
                      align-items: center;
                      min-height: 40px;
                      width:100%;
                      border-bottom: 0.5px solid #919191;
                    }
                    
                    .col{
                      display: flex;  
                      height: 100%;
                      width:100%;
                      align-items: center;
                    }
                    .col>p{
                      margin-left:10px;
                    }
                }
                `
              }
            </style>
          </div>
        </Page>
      );
    }
  
  if(id===undefined)
  return (
    <Page title="Quantum E-commerce - Products">
      
        <ErrorAlert message="This product is not found!"></ErrorAlert>
      </Page>
  );
  
  else
    if(offlineProducts[id]===undefined)
    return (
      
      <Page title="Quantum E-commerce - Products">
        
          <ErrorAlert message="This product is not found!"></ErrorAlert>
        </Page>
    );
}

