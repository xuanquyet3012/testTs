import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    // Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList, processColor
} from 'react-native';
// @ts-ignore
import {PieChart} from 'react-native-charts-wrapper';
// @ts-ignore
import ReportMembershipCell from "../../component/cells/ReportMembershipCell";
import NotePieChart from "../../component/layout/NotePiechart";
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
// @ts-ignore
const ReportMembership = ({navigation}) => {

    const [value, setValue] = useState('');

    useEffect(() => {
    }, []);

    // MARK: - Services
    const timeLeave = [1, 2, 3, 4, 5, 6, 7];

    // MARK: - Events

    const handleSelect = (event: { nativeEvent: any; }) => {
        console.log(event.nativeEvent.value);
        setValue(event.nativeEvent.value);
    };


    // MARK: - UIs
    // @ts-ignore
    const renderItem = ({item, index}) => {
        // @ts-ignore
        return <ReportMembershipCell item={item} value={value}/>;
    };

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <Card>
                    <CardItem>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }} style={{width: 54, height: 54, marginHorizontal: 5, borderRadius: 2}}/>
                            <View style={{marginLeft: 10}}>
                                <Text>Họ tên: Nguyễn Xuân Quyết</Text>
                                <Text>Chức vụ: Nhân viên</Text>
                                <Text>Phòng ban: Dev</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </View>
            <View style={{
                marginHorizontal: 20,
            }}>
                <Card>
                    <CardItem>
                        <View style={{flex: 1}}>
                            <PieChart
                                legend={{
                                    enabled: false,
                                    // textSize: 20,
                                }}
                                entryLabelColor={processColor('green')}
                                // chartBackgroundColor={processColor('grey')}
                                styledCenterText={{
                                    text: 'Report',
                                    color: processColor('pink'),
                                    size: 15,
                                }}
                                centerTextRadiusPercent={100}
                                onSelect={handleSelect}
                                holeRadius={40}
                                holeColor={processColor('#f0f0f0')}
                                transparentCircleRadius={45}
                                chartDescription={{text: ''}}
                                transparentCircleColor={processColor('#f0f0f088')}
                                maxAngle={400}
                                data={{
                                    dataSets: [
                                        {
                                            label: '',
                                            values: [
                                                {value: 450},
                                                {value: 210},
                                                {value: 150},
                                            ],
                                            config: {
                                                colors: [
                                                    processColor('#C0FF8C'),
                                                    processColor('#FFF78C'),
                                                    processColor('#FFD08C'),
                                                ],
                                                valueTextSize: 12,
                                                valueTextColor: processColor('green'),
                                                sliceSpace: 5,
                                                selectionShift: 13,

                                                valueFormatter: "#.#",
                                                valueLineColor: processColor('green'),
                                                valueLinePart1Length: 0.5,
                                            },
                                        },
                                    ],
                                }}
                                style={styles.chart}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <Card>
                                <CardItem>
                                    <View>
                                        <NotePieChart/>
                                        <View style={{marginHorizontal: 10, marginVertical: 5}}>
                                            <Text>Biểu đồ chi tiết thời gian hoạt động</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                    </CardItem>
                </Card>

            </View>

            <View style={{flex: 1, marginHorizontal: 20}}>
                <Card>
                    <CardItem>
                        <View style={{flex: 1, height: height / 2, justifyContent: 'center', alignItems: 'center'}}>
                            {value ? (<FlatList
                                style={styles.listView}
                                data={timeLeave || []}
                                horizontal={false}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => `${index}`}
                                extraData={timeLeave}
                            />) : <Text>Ấn vào từng phần trong biểu đồ để xem chi tiết</Text>}
                        </View>
                    </CardItem>
                </Card>
            </View>
        </View>
    );
};

export default ReportMembership;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    listView: {
        borderRadius: 2,
    },
    chart: {
        width: width / 2 - 40,
        height: width / 2.5,
        marginVertical: 5
    }
});

