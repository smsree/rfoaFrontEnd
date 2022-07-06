import classes from "./Admin.module.css";
const Admin = props =>{
    return <button className={classes.button} onClick={props.onClick}>
        <span>Admin</span>
    </button>
}
export default Admin;