import React, {useEffect, useRef, useState} from 'react';
import {
    Text,
    View,
} from 'react-native';

// @ts-ignore
const NotePieChart = ({}) => {

    // MARK: - Services

    // MARK: - Events

    // MARK: - UIs

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <View style={{width: 18, height: 18, marginHorizontal: 10, backgroundColor: '#C0FF8C', borderRadius: 2}}/>
                <View>
                    <Text>Số giờ làm</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                <View style={{width: 18, height: 18, marginHorizontal: 10, backgroundColor: '#FFF78C', borderRadius: 2}}/>
                <View>
                    <Text>Số giờ nghỉ</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 18, height: 18, marginHorizontal: 10, backgroundColor: '#FFD08C', borderRadius: 2}}/>
                <View>
                    <Text>Số giờ tăng ca</Text>
                </View>
            </View>
        </View>
    );
};

export default NotePieChart;

