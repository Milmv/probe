import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { fetchUsers } from '../store/users/actionCreators';
import { usersIsLoading, usersItems } from '../store/users/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { theme } from '../theme';
import { Block } from '../components/Blosk';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoSection: {
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userWrapper: {
        width: '85%',
        padding: 25,
        display: 'flex',
    },
    userInfo: {
        marginLeft: 25
    },
    username: {
        color: theme.palette.primary.main,
        fontSize: 10
    }
}));

export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const users = useSelector(usersItems);
    const isLoading = useSelector(usersIsLoading);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);


    return (
        <div className={classes.wrapper} >
            {isLoading ? <CircularProgress color='primary' /> :
                <section className={classes.infoSection}>
                    {users?.map((user) => <Block classes={classes} user={user} key={user._id} avatarUrl={'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'} />)}
                </section>
            }
        </div>
    )
}
