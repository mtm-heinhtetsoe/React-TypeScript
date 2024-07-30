import { ListGroupItem } from "react-bootstrap"

type Props = {
    children: React.ReactNode
}
export const ListItem = ({ children }: Props) => {
    return <ListGroupItem variant="primary">{ children }</ListGroupItem>
}