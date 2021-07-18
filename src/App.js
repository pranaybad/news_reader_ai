import React,{useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'
// import { command } from 'yargs';

const alanKey = 'eeb4d4d74d71f292a239cde69afedd262e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ()=>{
    const[newsArticles,setNewsArticle]=useState([]);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command,articles})=>{
                if(command === 'newHeadlines'){
                    setNewsArticle(articles);
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan Ai News Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App;