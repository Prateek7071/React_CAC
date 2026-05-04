import React, {useState, useEffect} from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router';
export default function EditPost() {
  
  const [post, setPosts] = useState(null)
  //because edit krne aaye hai user click krega then it will go to that url and to take that url useParams()

  const { slug } = useParams()
  const navigate = useNavigate()
  //to retrieve all values whenever there is any change in slug
  useEffect(() => {
    if (slug) {
      appwriteService.getPosts(slug).then((post) => {
        if (post) {
          setPosts(post)
        }
      }
      ).catch(error=>console.log(error))
    } else {
      navigate('/')
    }
  },[slug,navigate,post])
  
  return post? (
    <div className='py-8'>
      <Container>
        <PostForm post={ post} />
      </Container>
    </div>
  ):null;
}
