import ButtonRefresh from './ButtonRefresh';
import styles from './title.module.css'

interface titleProps {
  children: string
  refreshOnClick(): void
}

export default function Title({children, refreshOnClick }: titleProps ): JSX.Element {


    return (
      <div  className={styles.container}>
        <div className={styles.title}>{children}</div>
        <ButtonRefresh onClickHandler={refreshOnClick}>Refresh</ButtonRefresh>
      </div>
    );
  }