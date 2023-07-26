import { useEffect, useState } from "react"
import RowImage from "../RowImage/RowImage"
import "./Table.scss"

const Table = ({ listData }) => {
    return (
        <section className="table-sec">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className="th-div">
                                <div>ID</div>
                                <RowImage />
                            </div>
                        </th>
                        <th>
                            <div className="th-div">
                                <div>Заголовок</div>
                                <RowImage />
                            </div>
                        </th>
                        <th>
                            <div className="th-div">
                                <div>Описание</div>
                                <RowImage />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listData.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table
