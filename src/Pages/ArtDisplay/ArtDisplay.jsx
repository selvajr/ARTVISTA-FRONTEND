import React, { useState } from 'react';
import ExploreCategory from '../../Components/ExploreCategory/ExploreCategory';

import DisplayArt from '../../Components/DisplayArt/DisplayArt';

const ArtDisplay = () => {
const [category,setCategory]=useState('All')

    return (
        <div>
            <ExploreCategory category={category} setCategory={setCategory}/>
            <DisplayArt category={category}/>
        </div>
    );
};

export default ArtDisplay;