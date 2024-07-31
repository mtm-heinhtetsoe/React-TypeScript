import React, { useEffect, useState } from "react"
import { categories, data } from "../../../assets/data"
import { Item } from "../../atoms/Item/Item"
import { TableRow } from "../../atoms/TableRow/TableRow"
import { List } from "../../molecules/List/List"
import { ListItem } from "../../molecules/ListItem/ListItem"
import { ListTable } from "../../molecules/ListTable/ListTable"
import { ModeContext } from "../Layout"
import { PostList } from "./PostList"
import { ROLE } from "../../../enums/role"
import { PostRepository } from "../../../repositories/PostRepository"
import { useNavigate } from "react-router-dom"
import { PAGE_URL } from "../../../enums/urls"

export const PostListPage = () => {
    const Mode = React.useContext(ModeContext);
    const navigate = useNavigate();
    localStorage.setItem('role', 'Admin');
    const role: string | null = localStorage.getItem('role');
  
    const [postList, setPostList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    const handlePostList = (id?: number) => {
      setPostList((prevPosts: []) =>
        prevPosts.filter((post: any) => post.id !== id),
      );
    };
  
    useEffect(() => {
      if (role === ROLE.ADMIN) {
        PostRepository.getAllPost().then((response: any) => {
          response && setPostList(response);
          setLoading(false);
        });
      } else {
        navigate(PAGE_URL.ERROR);
      }
    }, []);

    return (
        <div>
            {Mode === "Table" ? (
                <PostList postList={postList} handlePostList={handlePostList} />
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