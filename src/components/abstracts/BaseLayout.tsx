import React from 'react'
import Header from 'components/TheHeader'
import UseStylesGlobal from 'styles/useStyles'
import { useSmDownMediaQuery } from 'hooks/mediaQuery'
import SideBarGroup from 'components/sideBar/TheSideBarGroup'
import Footer from 'components/footer/TheFooter'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
interface IProps {
}
export default (props: IProps) => {
    const globalClasses = UseStylesGlobal()
    const classes = useStyles()
    const isTablet = useSmDownMediaQuery()
    return (
        <div className={globalClasses.app}>
            {
                isTablet && (
                    <div className={classes.sizeBar}>
                        <SideBarGroup />
                    </div>
                )
            }
            <Header />
            <Footer />
        </div>
    )
}

const useStyles = makeStyles({
    sizeBar: {
        zIndex: variables.zIndex.sideBar,
        width: '180px',
        bottom: '0px',
        left: '0px',
        position: 'fixed',
        top: '0px',
        margin: '0',
        padding: '0',
        backgroundColor: 'blue'
    }
})

