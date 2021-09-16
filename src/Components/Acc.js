import React from "react";
import {Accordion, AccordionDetails, List} from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemStop from "./ListItemStop";
import Typography from "@material-ui/core/Typography";

const Acc = React.memo(
    ({ name , stops}) => (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className="Acc">Line: {name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <List>
                        {stops.map((p, i) => (
                            <ListItemStop {...p} key={i} />
                        ))}
                    </List>
                </Typography>
            </AccordionDetails>
        </Accordion>

    )
);

export default Acc;
