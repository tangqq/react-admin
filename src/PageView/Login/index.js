import React from 'react';
import { TextField } from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles';

/*
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));
*/

const Index = () => {
    const [name, setName] = React.useState('Composed TextField');

    function handleChange(event) {
        setName(event.target.value);
    }

    // const classes = useStyles();
    return <div>
        <TextField
            id="standard-password-input"
            label="姓名"
            type="text"
            autoComplete="current-password"

            margin="normal"
        />
    </div>
}

export default Index