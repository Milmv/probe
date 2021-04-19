import React from 'react'
import { Paper, Typography, Avatar } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home';

interface userProps {
    classes: ReturnType<typeof useHomeStyles>,
    user: {
        name: string,
        username: string,
        email: string
    },
    avatarUrl: string
}

export const Block: React.FC<any> = ({ classes, user, avatarUrl }: userProps): React.ReactElement => {
    return (
        <Paper variant='outlined' className={classes.userWrapper}>
            <Avatar alt="User Avatar" src={avatarUrl} />
            <div className={classes.userInfo}>
                <Typography className={classes.username}>{user.username}</Typography>
                <Typography>{user.name}</Typography>
            </div>
        </Paper>
    )
}
