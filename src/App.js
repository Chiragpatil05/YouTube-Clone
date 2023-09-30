import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

const App = () =>{
    return(
        <AppContext>
            <BrowserRouter>
                <div className=" flex flex-col h-full">
                    <Header/>

                    <Routes>
                        {/* home page jaha par apni "feed" dekhegi */}
                        <Route path="/" exact element={<Feed/>} />

                        {/* search karne pe jo page aayega "searchResult" wala page ya component */}
                        <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />

                        {/* koi bhi video chalne par jo aayega wo "VideoDetail" wala page ya component */}
                        <Route path="/video/:id" element={<VideoDetails/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    )
}

export default App