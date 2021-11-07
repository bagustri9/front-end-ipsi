import Button from 'react-bootstrap/Button'
import {BsPlus, BsDash} from "react-icons/bs"


const CartAction = () => {
    return(
        <div>
            <Button variant="link" size="sm">
                <BsPlus/>
            </Button>
            <Button variant="link" size="sm">
                <BsDash/>
            </Button>
        </div>
    )
}

export default CartAction