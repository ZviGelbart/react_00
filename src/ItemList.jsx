import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"

export default function ItemList() {
const [items, setItems] = useState([])
const {catName} = useParams()
   

useEffect(()=>{
    fetch('https://jbh-mockserver.onrender.com/categories/' + catName).
    then(f => f.json()).
    then(x=>
        setItems(x))
}, [])
    return (
            <div id="itemList">
                {items
                    .map(f => <Item key={f.id} item={f} />)}
            </div>
    )
}
