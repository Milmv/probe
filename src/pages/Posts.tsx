import React from 'react'
import { makeStyles } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoSection: {
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center'
    }
}));
const someText = 'Здесь могли быть посты'

export const Posts: React.FC = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.infoSection}>{someText} <EmojiPeopleIcon /></section>
        </div>
    )
}
