import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, TableRow,TableCell} from '@material-ui/core';
import { Add, Delete, Remove } from '@material-ui/icons';

const useStyles = makeStyles({
    image: {
        width: 50,
        height: 60,
    }
});

export default function TableContent({ id, name, price, image,quantity, inputHandler, reduceBinder, incrementBinder, deleteBinder }) {
    const classes = useStyles();
    return (
        <>            
            <TableRow>
                <TableCell align="center">
                    {id}
                </TableCell>
                <TableCell align="center">
                    <img className={classes.image} src={image} alt={name}/>
                </TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="right">
                    MMK {new Intl.NumberFormat('en-IN').format(price)}
                </TableCell>
                <TableCell align="right">
                    <IconButton onClick={(e) => reduceBinder(e,id)} color="secondary" aria-label="drcrease">
                        <Remove />
                    </IconButton>
                    <span>
                        <input                            
                            type='hidden'
                            value={quantity}
                            onChange={(e) => inputHandler(e,id)}
                        />
                        {quantity}
                    </span>
                    <IconButton onClick={(e) => incrementBinder(e,id)} color="primary" aria-label="increase">
                        <Add />
                    </IconButton>                    
                </TableCell>
                <TableCell align="right">
                    MMK {new Intl.NumberFormat('en-IN').format(price*quantity)}
                </TableCell>
                <TableCell align="right">
                    <IconButton onClick={(e) => deleteBinder(e,id)} color="secondary" aria-label="drcrease">
                        <Delete />
                    </IconButton>
                </TableCell>
            </TableRow>            
        </>
    )
}
