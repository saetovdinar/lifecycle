import styles from './button.module.css'


interface ButtonProps {
  children: string
  deleteOnClick(): void
  styles: React.CSSProperties
  id: string
}
export default function Button(props: ButtonProps ): JSX.Element {


    return (
      <div style={props.styles} className={styles.container}>
        <button id={props.id} onClick={props.deleteOnClick}  className={styles.btn}>{props.children}</button>
      </div>
    );
  }