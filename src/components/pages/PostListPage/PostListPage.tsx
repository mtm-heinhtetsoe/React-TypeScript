import React from "react"
import { categories, data } from "../../../assets/data"
import { Item } from "../../atoms/Item/Item"
import { TableRow } from "../../atoms/TableRow/TableRow"
import { List } from "../../molecules/List/List"
import { ListItem } from "../../molecules/ListItem/ListItem"
import { ListTable } from "../../molecules/ListTable/ListTable"
import { ModeContext } from "../Layout"

export const PostListPage = () => {
    const Mode = React.useContext(ModeContext);
    return (
        <div>
            {Mode === "Table" ? (
                <ListTable>
                    {data.map(d => <TableRow key={d.id} data={d} />)}
                </ListTable>
            ) : (
                <div>
                    {categories.map((category, index) => {
                        return (
                            <List key={index}>
                                {data.filter(d => d.category === category).map(d => {
                                    return <ListItem key={d.id}><Item key={d.id} data={d} /></ListItem>;
                                })}
                            </List>
                        ) 
                    })}
                </div>
            )}
        </div>
    )
}