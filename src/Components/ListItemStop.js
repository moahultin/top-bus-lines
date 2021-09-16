import React from "react";
import {
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ListItemStop = React.memo(
    ({ name }) => (
        <ListItem>
            <ListItemIcon>
                <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
);

export default ListItemStop;
