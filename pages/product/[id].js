import ErrorAlert from '../../components/alerts/error';
import LoadingPage from '../../components/loading-page'
import Page from '../../components/page';
import Productpage from '../../components/productpage/productpage';
import Mobileroductpage from '../../components/productpage/mobileproductpage';
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
   if(id!=undefined){
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
      <Productpage
      
      offlineProducts={offlineProducts}
      id={id}
      img={img}
      setimg={setimg}
      />
    );
   }
  
  if(matches&&id!=undefined)
    if(offlineProducts[id]!=undefined){
      return (
        <Mobileroductpage
      
      offlineProducts={offlineProducts}
      id={id}
      img={img}
      setimg={setimg}
      />
      );
    }
  
  if(id===undefined)
  return (
    <Page title="KUPIBEST">
      
      <LoadingPage/>
      </Page>
  );
  
  else
    if(offlineProducts[id]===undefined)
    return (
      
      <Page title="KUPIBEST">
        
          <ErrorAlert message="This product is not found!"></ErrorAlert>
        </Page>
    );
}


