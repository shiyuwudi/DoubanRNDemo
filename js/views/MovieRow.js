/**
 * Created by apple12 on 2016/12/4.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

const MovieRow = ({
    imageUri, title, desc, onPress,
}) => (

    <TouchableHighlight onPress={onPress} activeOpacity={0.8} underlayColor='red'>
        <View>
            <View style={styles.contentView}>

                <Image
                    source={{uri: imageUri}}
                    style={{width: 80, height: 100}}
                />

                <View style={styles.cellRight}>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={styles.desc}>
                        {desc}
                    </Text>

                </View>


            </View>
            <View style={styles.separator}></View>
        </View>
    </TouchableHighlight>
);

export default (MovieRow);

const styles = StyleSheet.create({
    contentView: {
        flex:1,
        flexDirection: 'row',
        padding: 8
    },
    cellRight: {
        flex:1,
    },
    title: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    desc:{
        fontSize: 12,
        fontWeight: '200',
        marginTop: 8,
        marginLeft: 16,
        lineHeight : 16,
    },
    separator: {
        backgroundColor: 'gray',
        height: 1,
    }
});