import React from 'react'

export default function numAleatorio(min, max) {  
    return Math.floor((Math.random() * (min + max)))
}