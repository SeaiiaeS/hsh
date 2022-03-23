import {Link} from 'react-router-dom'
export default function Li(props) {
    return <li className={props.class} ><Link to={props.to}>{props.icon}&nbsp;{props.child}</Link></li>
}