import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Dragon ball'] );

    const onAddCtegory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories( [newCategory,...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1> 

        <AddCategory 
            OnNewCategory={ onAddCtegory }
        />      

        {
            categories.map( (category) => (
                <GifGrid 
                    key={category}  
                    category={category} 
                />
            ))
        }
    </>
  )
}
