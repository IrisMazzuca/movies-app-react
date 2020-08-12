import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const ICONS = [<BsStarFill />, <BsStarHalf />, <BsStar />]

const renderIcons = (number) => {
    let icons
    const totalIcons = 5

    const isOdd = number % 2;
    const fullIcons = (number - isOdd) / 2
    const fullIconsArr = [...new Array(fullIcons)].map(() => ICONS[0])
    const halfIcons = isOdd ? ICONS[1] : null;
    const emptyIconsArr = [...new Array(totalIcons - fullIcons - isOdd)].map(() => ICONS[2])
    icons = [...fullIconsArr, halfIcons, ...emptyIconsArr]

    return icons
}

const Stars = ({ number }) => {

    return (
        <div className="container">
            {renderIcons(number)}
        </div>
    )
}

export default Stars;
