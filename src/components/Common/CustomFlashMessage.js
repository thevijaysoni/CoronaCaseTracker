import React from 'react';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const flashMessage = (message, type) => showMessage({
    message: message,
    type: type,
    icon: type,
    position: "bottom",
});
export default flashMessage;