import styles from './Home.module.css';

const Home = () => {
    return (
    <div class={styles.main}>
      <div class={styles.box}>
        <h1>
          PRO.beauty
        </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Mauris in ipsum eget quam rhoncus faucibus. 
        Donec eu vehicula nulla. 
        Vestibulum lacus erat, pretium et eleifend eu, iaculis eu nulla. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Mauris in ipsum eget quam rhoncus faucibus. 
        Donec eu vehicula nulla. 
        Vestibulum lacus erat, pretium et eleifend eu, iaculis eu nulla. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        <input type="button" class={styles.button} value="Products"></input>
      </div>
    </div>
  )};
  
  export default Home;