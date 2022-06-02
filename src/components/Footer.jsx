
import {BiCopyright} from 'react-icons/bi'

const Footer = ({footerDate}) => {
  return (
    <footer>
<span>
  {BiCopyright}
  <p>{footerDate.current} Carlos Pereira</p>
</span>

    </footer>
  )
}
export default Footer