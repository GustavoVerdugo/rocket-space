import GridGallery from './GridGallery';
import { useEffect, useState } from 'react'
import * as serviceRocket from '../services/rocket'

const RocketList = (data) => {

    return (
        <div>
            <GridGallery data={data.data} />
        </div>
    )
}

export default RocketList;