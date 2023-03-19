import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>게시글 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rerum, saepe aperiam tenetur distinctio molestiae fugit labore sapiente ut sequi veniam quaerat quibusdam ipsum, natus facilis cumque nemo atque placeat!{id}</h2>
        </div>
    );
};

export default Article;