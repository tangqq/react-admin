import React from 'react';
import ReactDOM from 'react-dom';
import '_s/index.less'
import _class from '_s/mobile.module.less'
import {makeStyles, TextField,withStyles} from "@material-ui/core";
import {pxToVw} from "_u/index";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        marginTop:0,
        marginBottom:0,
        width: pxToVw(200),
    },
    input: {
        color: 'red',
        // background:'red',
    },
    focused:{
        background:'#444',
        color:'#fff',
    }
}));
const inputProps = {
    step: 300,
};
function App() {
    const classes = useStyles();
    return <div className={_class.box}>hello word
        <div>
            <TextField
                id="standard-password-input"
                label="姓名"
                className={classes.textField}
                type="text"
                autoComplete="current-password"
                InputProps={{classes:{input:classes.input,
                        focused:classes.focused}}}
                margin="normal"
            />
        </div>
    </div>
}

// Add this in your component file
ReactDOM.render(<App/>, document.getElementById('root'))
