type Props = {
    data: {
        id: number;
        category: string;
        title: string;
        description: string;
        author: string;
        authoredDate: string;
    }
}
export const TableRow = ({ data }: Props) => {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.category}</td>
            <td>{data.description}</td>
            <td>{data.author}</td>
            <td>{data.authoredDate}</td>
        </tr>
    )
}