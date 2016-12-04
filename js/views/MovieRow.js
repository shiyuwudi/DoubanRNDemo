/**
 * Created by apple12 on 2016/12/4.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default ({imageUri, title, year, collect_count}) => (
    <View>
        <View style={styles.contentView}>

            <Image
                source={{uri: imageUri}}
                style={{width: 80, height: 100}}
            />

            <View style={styles.cellRight}>

                <Text style={styles.title}>{`${title}（${year}）`}</Text>

                <View style={styles.desc}>
                    <Text>{`喜欢：${collect_count}人`}</Text>
                </View>

            </View>


        </View>
        <View style={styles.seperator}></View>
    </View>
);

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
    },
});