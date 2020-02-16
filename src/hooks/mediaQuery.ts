import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
export function useSmDownMediaQuery() {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up('sm'))
    return match
}