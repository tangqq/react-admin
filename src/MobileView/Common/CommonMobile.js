import React from 'react';
import purple from '@material-ui/core/colors/purple'
import makeStyles from '@material-ui/core/styles/makeStyles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import  Container from '@material-ui/core/Container';
import {replace} from 'connected-react-router'
import {connect} from "react-redux";
import {pxToVw} from "_u/index";
import RenderRouterM from '_c/RenderRouter/RenderRouterMobile'

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '100%',
        background: purple[300],
        bottom: 0,
        left: 0,

    },

});
const actionStyles = makeStyles({
    root: {
        color: '#fff',
    },
    selected: {
        color: purple[900]
    }
});
function Common({routes,replace,location,...props}) {
    const [value, setValue] = React.useState(location.pathname);
    const na = useStyles();
    const action = actionStyles();
    const handleChange=(e,newValue)=>{
        replace(newValue);
        setValue(newValue)
    };
    return <Container>
        <RenderRouterM routes={routes} animate/>

        <BottomNavigation
            className={na.root}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction classes={action} value={"/a"} icon={<RestoreIcon/>} label="Amian"/>
            <BottomNavigationAction classes={action}  value={"/b"} icon={<LocationOnIcon/>} label="Bmian"/>
            <BottomNavigationAction classes={action}  value={"/"} icon={<FavoriteIcon/>} label="Home"/>
        </BottomNavigation>
    </Container>
}

export default connect(null,{replace})(Common)