import "./App.scss"
import "semantic-ui-css/semantic.min.css"
import Search from "./components/Search/Search"
import { useEffect, useState } from "react"
import Table from "./components/Table/Table"
import { useSelector } from "react-redux"
import { useActions } from "../src/services/useActions"
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react"
import PageController from "./components/PageController/PageController"

function App() {

    const { listArray, isLoading, error } = useSelector(
        (state) => state.listReducer
    )
    const { getList } = useActions()

    const [tenItems, setTenItems] = useState([])

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        setTenItems(listArray.slice(0, 10))
    }, [listArray])

    return (
        <div className="App">
            <Search />
            {isLoading && listArray ? (
                <Segment>
                    <Dimmer active>
                        <Loader content="Loading" />
                    </Dimmer>
                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </Segment>
            ) : error ? (
                <div>ERROR</div>
            ) : (
                <Table listData={tenItems} />
            )}
            <PageController />
        </div>
    )
}

export default App
