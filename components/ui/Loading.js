import classes from "./Loading.module.css";

function Loading() {
    return <div className={classes.spinningcontainer}>
    <div className={classes.loadingspinner}></div>
  </div>;
}

export default Loading;
