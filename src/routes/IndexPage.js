import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const IndexPage = () => {
  return (
    <div >
      <header className={styles.header}>
        <div className={styles.meBox}>
          <div className={styles.me} />
          <div className={styles.inform}>
            <p>喊我：斯里兰卡·仙僧</p>
            <p>种族：天族</p>
            <p>身高：178</p>
            <p>体重：150</p>
            <p>国籍：中华大地</p>
          </div>
        </div>
      </header>
      <div className={styles.welcomeSpeechBox}>
        <h1 className={styles.welcomeSpeech}>感谢外表俊美内心龌龊的你</h1>,
        <br/>
        <h1 className={styles.welcomeSpeech}>能够来到更不要脸的我的这里^_^！</h1>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
