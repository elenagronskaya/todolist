import { useEffect } from "react"

export default function TodosDetailsPage(props){
    const  {id} = props.match.params
    // useEffect(
    //     {
    //         dispatch(GetNotes, payloaeed :Id)
    //     }
    // )
    // console.log(props)
    return(
    <div>Details Page: TodoList Id:  {id}</div>
    )
}