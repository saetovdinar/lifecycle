import styles from './button.module.css'


interface refreshProps {
  children: string
  onClickHandler(): void
}

export default function ButtonRefresh({children, onClickHandler}: refreshProps ): JSX.Element {


    return (
      <div className={styles.container}>
        <button   onClick={onClickHandler}  className={styles.btn}>{children}</button>
      </div>
    );
  }