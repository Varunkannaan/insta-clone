import Logo from "../images/Instagram_logo.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar () {
    return(
                <nav class="navbar w-100 fixed-top navbar-light bg-white border-bottom">
                    <div class="container d-flex justify-content-evenly mt-1">
                        <div>
                            <a href="#" class="navbar-logo">
                                <img src={Logo} alt="logo" class="d-inline-block align-top" height="39"/>
                            </a>
                            </div>
                            <div>
                            <form>
                                <div class="form-group has-search">
                                    <span class="form-control-feedback"><SearchOutlinedIcon fontSize="small"/></span>
                                    <input type="text" class="form-control border-0" placeholder="Search"/>
                                </div>
                            </form>
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary py-1 px-2 mx-2">Log In</button>
                                <button type="button" class="btn btn-outline-primary py-1 px-2">Sign Up</button>
                            </div>
                            
                        </div>
                </nav>   
    )
}

export default Navbar;