import './directory.styles.scss'
import CategoryItem from '../category-item/category-item'

const Directory =(props)=>{
    return(
        <div className='directory-container'>
            {props.categories.map((category)=>(
            <CategoryItem key={category.id} category={category} />))}
        </div>
    )
}

export default Directory