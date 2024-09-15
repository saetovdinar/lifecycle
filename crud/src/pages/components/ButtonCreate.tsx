import styles from './button.create.module.css'


interface ButtonProps {
  children: string
  addHendler(): void
  styles: React.CSSProperties

}
export default function Button(props: ButtonProps ): JSX.Element {


    return (
      <div style={props.styles} className={styles.container}>
        <button  onClick={props.addHendler}  className={styles.btn}>{props.children}</button>
      </div>
    );
  }