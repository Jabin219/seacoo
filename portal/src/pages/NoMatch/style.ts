import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    errorPage: {
        height: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .error': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(/images/nomatch/404.png)'
        }
    }
})
