/**
 * Created by apple12 on 2016/12/4.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
    ActivityIndicator,
    Image,
} from 'react-native';

export default ({
    navigator, detail, loading,
}) => (
    loading ? (
        <ActivityIndicator animating size="large"/>
    ) : (
        <View style={styles.container}>
            <Text> {detail.aka ? detail.aka.join(',') : ''} </Text>
        </View>
    )
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
    },
});