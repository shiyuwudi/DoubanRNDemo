/**
 * Created by apple12 on 2016/12/4.
 */

import React from 'react'
import { ActivityIndicator, Button, StyleSheet} from 'react-native'

export default ({
    loading, onPress, title,
}) => (
    loading ?
        <ActivityIndicator animating size="large"/>
        :
        <Button
            style={styles.topButton}
            onPress={onPress}
            title={title}
            color="blue"
        />
);

const styles = StyleSheet.create({
    topButton: {
        backgroundColor: 'green',
        marginTop: 64,
    },
});