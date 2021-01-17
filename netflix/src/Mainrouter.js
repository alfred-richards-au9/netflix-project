import { BrowserRouter, Route } from "react-router-dom"
import Addjson from "./Addmovies"
import Mainpage from "./Intropage/Mainpage"
import Register from "./logincomponents/Register"
import Signin from "./logincomponents/Signin"
import Documantaries from "./Netflixprofile.js/Documatary"
import Flims from "./Netflixprofile.js/Flims"
import Mainprofile from "./Netflixprofile.js/Mainprofile"
import Series from "./Netflixprofile.js/Series"
import Watchlist from "./Netflixprofile.js/Watchlist"
import Practice from "./Practice"
import Userprofile from "./users/Userprofile"
import Watching_card from "./Whoiswatching/Watching_card"


const Mainrouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Mainpage} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/watching' component={Watching_card} />
                <Route path='/profile' component={Mainprofile} />
                <Route path='/db' component={Addjson} />
                <Route path='/series' component={Series} />
                <Route path='/flims' component={Flims} />
                <Route path='/documantaries' component={Documantaries} />
                <Route path='/register' component={Register} />
                <Route path='/practice' component={Practice} />
                <Route path='/watchlist' component={Watchlist} />
                <Route path='/userprofile' component={Userprofile} />
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter