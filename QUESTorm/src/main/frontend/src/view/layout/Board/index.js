import React from 'react'
import Box from '@mui/material/Box'
import Navigation from '../../Navigation'
import Editor from '../../../components/Editor'
import '@tldraw/tldraw/tldraw.css'

export default function Board() {
    
    return (
        <>
        <Navigation />
        <Box display='flex'>
            <div className="tldraw__editor">
			<Editor />
		    </div>
        </Box>
        </>
    )
}