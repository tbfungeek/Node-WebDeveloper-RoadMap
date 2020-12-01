import styles from './index.css';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <List>
        <List.Item>
          <Link to="/class/component-old">component-Old</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/component-new">component-New</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/dva">Dva</Link>
        </List.Item>
      </List>
    </div>
  );
}
