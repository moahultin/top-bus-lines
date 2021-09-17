import React from "react";
import {
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";

import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ListItemStop from "./ListItemStop";

const ListItemLine = React.memo(
    ({ name , stops}) => (
        <ListItem button>
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
