import {Fragment} from "react"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header =(props)=>{
    return <Fragment>
        <header className={classes.header}><h1>Green Home Foods</h1>
       
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
        <img src="https://cdn.gobankingrates.com/wp-content/uploads/2018/07/Close-up-on-a-chef-serving-a-plate-at-a-restaurant-iStock-827992056.jpg" alt="table full of food"/>
        </div>
        
    </Fragment>
}
export default Header;