import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import photo1 from "../images/photo1.jpeg"
import photo2 from "../images/photo2.jpeg"
import photo3 from "../images/photo3.jpeg"
import photo4 from "../images/photo4.jpeg"
import photo5 from "../images/photo5.jpeg"
import photo6 from "../images/photo6.jpeg"
import photo7 from "../images/photo7.jpeg"
import photo8 from "../images/photo8.jpeg"
import photo9 from "../images/photo9.jpeg"
import photo10 from "../images/photo10.jpeg"
import photo11 from "../images/photo11.jpeg"
import photo12 from "../images/photo12.jpeg"
import photo13 from "../images/photo13.jpeg"
import photo14 from "../images/photo14.jpeg"
import photo15 from "../images/photo15.jpeg"
import photo16 from "../images/photo16.jpeg"
import photo17 from "../images/photo17.jpeg"
import photo18 from "../images/photo18.jpeg"

function Posts () {
    return (
        <div class="container lyn">
        <ul class="nav justify-content-center mt-5 mb-3 border-top">
            <li class="nav-item">
                <a class="nav-link pt-4 mx-3 txt3" aria-current="page" href="#"><GridOnSharpIcon sx={{fontSize:14,marginRight:1/2,paddingBottom:1/4}}/>POSTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link pt-4 mx-3 txt3" href="#"><MovieFilterOutlinedIcon sx={{fontSize:15,marginRight:1/2,paddingBottom:1/4}}/>REELS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link pt-4 mx-3 txt3" href="#"><PortraitOutlinedIcon sx={{fontSize:15,marginRight:1/2,paddingBottom:1/4}}/>TAGGED</a>
            </li>
        </ul>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo1} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo2} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo3} alt="img" width="290" height="290"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo4} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo5} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo6} alt="img" width="290" height="290"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo7} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo8} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo9} alt="img" width="290" height="290"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo10} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo11} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo12} alt="img" width="290" height="290"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo13} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo14} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo15} alt="img" width="290" height="290"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-4">
                <img src={photo16} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo17} alt="img" width="290" height="290"/>
            </div>
            <div class="col-lg-4">
                <img src={photo18} alt="img" width="290" height="290"/>
            </div>
        </div>
        </div>
)}

export default Posts;