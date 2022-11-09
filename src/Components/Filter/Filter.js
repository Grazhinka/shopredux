import {useDispatch, useSelector} from "react-redux"
import { getSelectedCategory, filterCategory } from "../../Redux/catalogSlice";


const Filter= ()=>{
    const selectedCategory=useSelector(getSelectedCategory)
    const dispatch=useDispatch();

    return(
        <div className='container filterDiv' >
            {['костюмы','платья','верхняя одежда','ВСЁ'].
            map(category=>    
                <div key={category.toString()}>   
                    <p  onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>   
                </div>
            )
            }
        </div>
    )
}

export default Filter
