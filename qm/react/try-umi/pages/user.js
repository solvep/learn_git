import router from 'umi/router';
import styles from './user.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page user</h1>
      <button onClick={() =>{
        router.goBack();
      }}>go goBack</button>
    </div>
  );
}
