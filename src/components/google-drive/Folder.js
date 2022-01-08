import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder, faFolderPlus} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
function Folder({folder}) {
    return (
        
           <Button to={{
               pathname: `/folder/${folder.id}`,
               state: {folder: folder}}
           } variant="outline-primary" className="text-truncate w-100" size = 'lg' as={Link}> <FontAwesomeIcon icon={faFolderPlus} className='mr-2'/> \
           {folder.name}</Button>
        
    )
}

export default Folder
