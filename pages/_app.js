import '../public/index.css';
import  {useRouter} from 'next/router';
import { useEffect } from 'react';
import  Router  from 'next/router';


export default function MyApp({ Component, pageProps}) {
  
  const router = useRouter()
    
    if(router.pathname==='/404'&& router.asPath!=='/404')
    useEffect(() => {
        Router.push({
            pathname: router.asPath,
            
            
         }, undefined, { shallow: true})
    },[])
    console.log(router)
  
  
  return (
    
      <Component {...pageProps} />
    
  );
}
