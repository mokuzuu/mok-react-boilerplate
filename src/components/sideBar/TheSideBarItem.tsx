import React from 'react'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
interface IProps {
}
export default (props: IProps) => {
    const classes = useStyles()
    return (
        <li className={classes.sideBarMenuItem}>
            <div>

            </div>
            <div>

            </div>
        </li>
    )
}

const useStyles = makeStyles(theme => ({
    sideBarMenuItem: {
        display: 'block',
        '& a': {
            diaplay: 'flex',
            flexDirection: 'row',
            padding: '84px',
            fontWeight: '200',
            fontSize: variables.fontSize.default,
            color: 'blue',
            textDecoration: 'none',
            '& hover': {
                color: 'blue',
                backgroundColor: '#ececee'
            },
            '& i': {
                width: variables.space['24'],
                height: variables.space['24'],
                flex: '0 0 auto',
                marginRight: variables.space['12']
            }
        }
    }
}))