import React from 'react'
import MyButton from '../MyButton/MyButton'

import { BsTrash, BsLightbulb } from "react-icons/bs"
import { IoIosAddCircleOutline, IoIosArrowForward } from "react-icons/io"

import './ModuleFooter.css'

export default function ModuleFooter() {
    return (
        <>
            <MyButton buttonColor="btn--red" size="btn--medium" type="button">
                <span> Delete</span>
                <BsTrash />
            </MyButton>
            <MyButton buttonColor="btn--yellow" size="btn--medium" type="button">
                <span>Advice</span>
                <BsLightbulb />
            </MyButton>
            <MyButton buttonColor="btn--pink" size="btn--medium" type="button">
                <IoIosAddCircleOutline />
                <span>Create</span>
            </MyButton>
            <MyButton buttonColor="btn--green" size="btn--medium" type="button">
                <span>Submit</span>
                <IoIosArrowForward />
            </MyButton>
        </>
    )
}
