import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/Login/index';
import Main from './screens/Main/index';


export default createAppContainer(
    createSwitchNavigator(
        {
            Login,
            Main,
        },
    )
);