import styles from './Card.module.css';

const Card = props => {
    return(
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    // 希望Card是可以重複利用的組件，除了要有本身的style之外，也希望他能承接其他由prop而來的屬性
    // 於是要他有2種css 可以用`${}`來表示，後方 props.名字可自取
    )

}

export default Card;