import Virat_dp from "../images/dp.jpeg"
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Profile() {
    return(
        <div class="container pro">
            <div class="row">
                <div class="d-flex align-items-center col-lg-4">
                    <img src={Virat_dp} alt="dp" class="cent" style={{width:"150px",height:"150px",borderRadius:"75px"}}/>
                </div>
                <div class="col-lg-8">
                <div class="d-flex align-items-center">
                    <h2 class="txt mt-2" style={{paddingRight:"4px"}}>virat.kohli</h2>
                    <VerifiedIcon sx={{color:"#0095f6",fontSize:20}}/>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-secondary py-1 px-3 mx-4">Follow</button>
                        <button type="button" class="btn btn-outline-secondary py-1 px-2" style={{marginLeft:"-15px"}}>Message </button> 
                        <button type="button" class="dot mx-2"><MoreHorizIcon sx={{fontSize:27}}/></button>
                    </div>
                </div>
                <div class="my-3">
                        <div class="txt1">
                            <span style={{paddingRight:"38px"}}>
                                <b>1,478 </b>posts
                            </span>
                            <span style={{paddingRight:"38px"}}>
                                <b>266M </b>followers
                            </span>
                            <span>
                                <b>265 </b>following
                            </span>
                        </div>
                </div>
                <div>
                    <div class="txt1">
                        <span>
                        <b>Virat Kohli</b><br/>
                        </span>
                        <span>
                            Carpediem!<br/>
                        </span>
                        <a class="txt2"href="https://www.bluetribefoods.com/collections/shop?utm_source=ig-virat&utm_medium=Post&utm_campaign=virat+">
                            www.bluetribefoods.com/collections/shop?utm_source=ig-virat&utm_medium...
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
 