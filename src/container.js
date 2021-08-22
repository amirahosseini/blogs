import {useState} from 'react';
import BlogList from './blogslists';


const Container = () => {
    const [blogs ,setBlog ]= useState( 
        [
            {title: 'this is title',hashtags:'#programming , #tech , technology', body:'this is our body for us and i have no idea what am i doing and this is  is just a test', id:1 },
            {title: 'this is title number 2 ',hashtags:'#programming , #tech , technology', body:'this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?', id:2 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body for us 3 this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body for us 3 this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body for us 3 this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?is our body for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our bothis is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?dy for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is othis is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?ur body for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body  fgjlsdfkgjdfklogjdfkl fjfghflgf  chjkgfg;lsdfk for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology', body:'this is our body this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took  for us 3 ', id:3 },
            {title: 'this is title number 3',hashtags:'#programming , #tech , technology' ,body:'this is our body forthis is our body for this is our body for us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?us 2What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? us 3 ', id:3 }
        ]
    );

    
    return ( 
        <BlogList blogs={blogs} />
    );
}

export default Container;