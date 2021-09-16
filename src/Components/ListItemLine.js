import React from "react";
import {
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";

import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ListItemStop from "./ListItemStop";


const handleClick = () => {
};

const ListItemLine = React.memo(
    ({ name , stops}) => (
        <ListItem button onClick={handleClick()}>
            <ListItemIcon>
                <DirectionsBusIcon />
            </ListItemIcon>
            <ListItemText primary={name} secondary={stops.map((p, i) => (
                <ListItemStop {...p} key={i} />
            ))}/>
        </ListItem>

    )
);

export default ListItemLine;
