import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    processColor,
} from 'react-native';
// @ts-ignore
import {PieChart} from 'react-native-charts-wrapper';
// @ts-ignore
import CardView from 'react-native-cardview'
import NotePieChart from "../../component/layout/NotePiechart";

// @ts-ignore
const ReportDepartment = ({navigation}) => {


    useEffect(() => {
    }, []);

    // MARK: - Services
    const data = {
        dataSets: [
            {
                label: '',
                values: [
                    {value: 50, label: ''},
                    {value: 20, label: ''},
                    {value: 30, label: ''},
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
    };

    // MARK: - Events

    const listMembership = (type: string) => {
        console.log(type);
        navigation.navigate('DepartmentListScreen', {type: type});
    };

    const handleSelect = (event: { nativeEvent: any; }) => {
        console.log(event.nativeEvent)
    };


    // MARK: - UIs

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'grey',
                marginHorizontal: 20,
                borderRadius: 2,
                marginVertical: 10
            }}>
                <View style={{flex: 1}}>
                    <PieChart
                        legend={{
                            enabled: false,
                            // textSize: 20,
                            form: 'CIRCLE',
                            wordWrapEnabled: true,
                        }}
                        entryLabelColor={processColor('green')}
                        // chartBackgroundColor={processColor('grey')}
                        styledCenterText={{
                            text: 'HR',
                            color: processColor('pink'),
                            size: 15,
                        }}
                        centerTextRadiusPercent={100}
                        onSelect={handleSelect}
                        onChange={(event: any) => console.log(event.nativeEvent)}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        chartDescription={{text: ''}}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={400}
                        data={data}
                        style={styles.chart}
                    />
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.detailForm}>
                        <CardView cardElevation={20}
                                  cardMaxElevation={20}
                                  cornerRadius={2}
                                  style={styles.detailCardNote}>
                            <NotePieChart/>
                            <View style={{marginHorizontal: 10, marginVertical: 5}}>
                                <Text>Department HR</Text>
                            </View>
                        </CardView>
                        <TouchableOpacity style={styles.buttonSignIn} onPress={(e) => {listMembership('HR')}}>
                            <Text style={styles.text}>Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'grey',
                marginHorizontal: 20,
                borderRadius: 2,
                marginBottom: 10
            }}>
                <View style={{flex: 1}}>
                    <PieChart
                        legend={{
                            enabled: false,
                            // textSize: 20,
                            form: 'CIRCLE',
                            wordWrapEnabled: true,
                        }}
                        entryLabelColor={processColor('green')}
                        // chartBackgroundColor={processColor('grey')}
                        styledCenterText={{
                            text: 'DEV',
                            color: processColor('pink'),
                            size: 15,
                        }}
                        centerTextRadiusPercent={100}
                        onSelect={handleSelect}
                        onChange={(event: any) => console.log(event.nativeEvent)}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        chartDescription={{text: ''}}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={400}
                        data={data}
                        style={styles.chart}
                    />
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.detailForm}>
                        <CardView cardElevation={20}
                                  cardMaxElevation={20}
                                  cornerRadius={2}
                                  style={styles.detailCardNote}>
                            <NotePieChart/>
                            <View style={{marginHorizontal: 10, marginVertical: 5}}>
                                <Text>Department Dev</Text>
                            </View>
                        </CardView>
                        <TouchableOpacity style={styles.buttonSignIn}>
                            <Text style={styles.text}>Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: 'grey', marginHorizontal: 20, borderRadius: 2}}>
                <View style={{flex: 1}}>
                    <PieChart
                        legend={{
                            enabled: false,
                            // textSize: 20,
                            form: 'CIRCLE',
                            wordWrapEnabled: true,
                        }}
                        entryLabelColor={processColor('green')}
                        // chartBackgroundColor={processColor('grey')}
                        styledCenterText={{
                            text: 'SALE',
                            color: processColor('pink'),
                            size: 15,
                        }}
                        centerTextRadiusPercent={100}
                        onSelect={handleSelect}
                        onChange={(event: any) => console.log(event.nativeEvent)}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        chartDescription={{text: ''}}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={400}
                        data={data}
                        style={styles.chart}
                    />
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.detailForm}>
                        <CardView cardElevation={20}
                                  cardMaxElevation={20}
                                  cornerRadius={2}
                                  style={styles.detailCardNote}>
                            <NotePieChart/>
                            <View style={{marginHorizontal: 10, marginVertical: 5}}>
                                <Text>Department Sale</Text>
                            </View>
                        </CardView>
                        <TouchableOpacity style={styles.buttonSignIn}>
                            <Text style={styles.text}>Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ReportDepartment;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailForm: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailCard: {
        justifyContent: 'center',
        marginTop: 10,
        width: width - 40,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    detailCardNote: {
        justifyContent: 'center',
        marginTop: 10,
        width: width / 2 - 40,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    chart: {
        width: width / 2 - 40,
        height: width / 2.5,
        marginHorizontal: 20
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    buttonSignIn: {
        width: width / 2 - 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#8ac249',
        backgroundColor: '#8ac249',
        fontSize: 15,
        height: 35,
        borderRadius: 2,
        marginVertical: 5,
    },
});

