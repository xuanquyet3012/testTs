import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    processColor, ScrollView
} from 'react-native';
// @ts-ignore
import {BarChart} from 'react-native-charts-wrapper'
import {Card, CardItem, Text} from 'native-base';


// @ts-ignore
const ReportCompany = ({navigation}) => {


    useEffect(() => {
    }, []);

    // MARK: - Services

    // MARK: - Events

    const handleSelect = (event: { nativeEvent: any; }) => {
        console.log(event.nativeEvent)
    };
    const listMembership = (type: any) => {
        navigation.navigate('DepartmentListScreen', {type: type});
    };
    // MARK: - UIs

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flex: 1, marginHorizontal: 20}}>

                    <Card>
                        <CardItem>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress={(type) => listMembership('HR')}>
                                    <Card>
                                        <CardItem>
                                            <View style={{flex: 1}}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginVertical: 5,
                                                    alignItems: 'center'
                                                }}>
                                                    <Image source={{
                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                    }} style={{width: 54, height: 54, marginHorizontal: 5, borderRadius: 2}}/>
                                                    <View>
                                                        <Text>Department HR</Text>
                                                        <Text>Leader: 1 người</Text>
                                                        <Text>Membership: 58 người</Text>
                                                    </View>
                                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                                        <Image
                                                            source={require('../../resources/images/IconArrowUp.png')}
                                                            style={{
                                                                width: 12,
                                                                height: 12,
                                                                marginHorizontal: 5,
                                                            }}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <View style={{flex: 1}}>
                                <TouchableOpacity>
                                    <Card>
                                        <CardItem>
                                            <View style={{flex: 1}}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginVertical: 5,
                                                    alignItems: 'center'
                                                }}>
                                                    <Image source={{
                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                    }} style={{width: 54, height: 54, marginHorizontal: 5, borderRadius: 2}}/>
                                                    <View>
                                                        <Text>Department Dev</Text>
                                                        <Text>Leader: 1 người</Text>
                                                        <Text>Membership: 58 người</Text>
                                                    </View>
                                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                                        <Image
                                                            source={require('../../resources/images/IconArrowUp.png')}
                                                            style={{
                                                                width: 12,
                                                                height: 12,
                                                                marginHorizontal: 5,
                                                            }}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <View style={{flex: 1}}>
                                <TouchableOpacity>
                                    <Card>
                                        <CardItem>
                                            <View style={{flex: 1}}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginVertical: 5,
                                                    alignItems: 'center'
                                                }}>
                                                    <Image source={{
                                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                                    }} style={{width: 54, height: 54, marginHorizontal: 5, borderRadius: 2}}/>
                                                    <View>
                                                        <Text>Department Sale</Text>
                                                        <Text>Leader: 1 người</Text>
                                                        <Text>Membership: 58 người</Text>
                                                    </View>
                                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                                        <Image
                                                            source={require('../../resources/images/IconArrowUp.png')}
                                                            style={{
                                                                width: 12,
                                                                height: 12,
                                                                marginHorizontal: 5,
                                                            }}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <View style={{width: width, height: height / 2.5, flex: 1}}>
                                <BarChart
                                    style={styles.container}
                                    xAxis={{
                                        valueFormatter: ['Hr', 'Sale', 'Dev'],
                                        granularityEnabled: true,
                                        granularity: 1,
                                        drawAxisLine: true
                                    }}
                                    yAxis={{
                                        left: {
                                            drawLabels: true,
                                            drawAxisLine: true,
                                            drawGridLines: false,
                                        },
                                        right: {
                                            enabled: true,
                                        },
                                    }}
                                    data={{
                                        dataSets: [
                                            {
                                                values: [
                                                    {
                                                        y: [4000, 800, 1000],
                                                        marker: ['Số giờ làm', 'Số giờ nghỉ', 'Số giờ tăng ca']
                                                    },
                                                    {
                                                        y: [3500, 500, 1000],
                                                        marker: ['Số giờ làm', 'Số giờ nghỉ', 'Số giờ tăng ca']
                                                    },
                                                    {
                                                        y: [3000, 300, 1100],
                                                        marker: ['Số giờ làm', 'Số giờ nghỉ', 'Số giờ tăng ca']
                                                    },
                                                ],
                                                label: 'Biểu đồ thống kê thời gian của các phòng ban',
                                                config: {
                                                    colors: [
                                                        processColor('#C0FF8C'),
                                                        processColor('#FFF78C'),
                                                        processColor('#FFD08C'),
                                                    ],
                                                    stackLabels: ['Số giờ làm', 'Số giờ nghỉ', 'Số giờ tăng ca'],
                                                },
                                            },
                                        ],
                                    }}
                                    legend={{
                                        enabled: true,
                                        textSize: 14,
                                        form: 'SQUARE',
                                        formSize: 14,
                                        xEntrySpace: 10,
                                        yEntrySpace: 5,
                                        wordWrapEnabled: true,
                                    }}
                                    drawValueAboveBar={false}
                                    marker={{
                                        enabled: true,
                                        markerColor: processColor('#F0C0FF8C'),
                                        textColor: processColor('white'),
                                        markerFontSize: 14,
                                    }}
                                    chartDescription={{text: ''}}
                                    // highlights={[{x: 0, stackIndex: 2}, {x: 1, stackIndex: 1}, {x: 2, stackIndex: 1}]}
                                    onSelect={handleSelect}
                                    onChange={(event: { nativeEvent: any; }) => console.log(event.nativeEvent)}
                                />
                            </View>
                        </CardItem>
                    </Card>
                </View>
            </View>
        </ScrollView>
    );
};

export default ReportCompany;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    viewBarChart: {
        width: width,
        height: height / 2,
    },
});

