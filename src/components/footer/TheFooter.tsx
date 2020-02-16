import React from 'react'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
import FooterButton from './TheFooterButton'
export default () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <FooterButton />
            <FooterButton />
            <FooterButton />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    footer: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        zIndex: variables.zIndex.footer,
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center'
    }
}))