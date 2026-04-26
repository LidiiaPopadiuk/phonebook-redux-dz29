
import { findContact } from "../redux/actions"
import { useDispatch } from "react-redux"

export const Filter = () => {
    const dispatch = useDispatch()

    const filterNames = (e) => {
        const elementInput = e.target.value
        dispatch(findContact(elementInput))
    }

    return (
        <div>
            <p>Find contacts by name</p>
            <input onInput={filterNames} name="filter" id="filterInput" type="text" />
        </div>
    )
}