import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {BottomTab} from './tab';

const Navigation = createSwitchNavigator(
    {
        Main: {
            screen: BottomTab,
        },
    }
);

export default createAppContainer(Navigation);