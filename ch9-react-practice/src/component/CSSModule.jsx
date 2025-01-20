import styles from '../CSSModule.module.css';
import classNames from 'classnames/bind';

const CSSModule = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className={'something'}>CSSModule!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className={'something2'}>CSSModule!</span>
      </div>
      <div className={cx('wrapper', 'invented')}>
        안녕하세요, 저는 <span className={'something2'}>CSSModule!</span>
      </div>
    </>
  );
};

export default CSSModule;
