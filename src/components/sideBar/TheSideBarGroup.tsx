import React from 'react'
import SideBarItem from './TheSideBarItem'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
export default () => {
    const classes = useStyles()
    return (
        <div className={classes.sideBarGroup}>
            <ul>
                <SideBarItem />
            </ul>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    sideBarGroup: {
        display: 'flex',
        justifyContent: 'center',
        margin: `0 0 ${variables.space['48']} 0`,
        '& ul': {
            padding: '0'
        },
        '& strong': {
            display: 'block',
            fontWeight: variables.fontWeight.regular,
            fontSize: variables.fontSize.default,
            borderBottom: variables.space['4'],
            marginBottom: variables.space['12']
        }
    }
}))
