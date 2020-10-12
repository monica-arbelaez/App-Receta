import React from 'react'
import { GetReceta } from '../../helpers/GetReceta'

export const Header = ({titulo, clase}) => {
    return (
        <getReceta>
            <h1 className={clase}>{titulo}</h1>
        </getReceta>
    )
}
