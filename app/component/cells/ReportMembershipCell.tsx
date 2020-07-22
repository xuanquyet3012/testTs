import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
// @ts-ignore
import CardView from 'react-native-cardview'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';


// @ts-ignore
const ReportMembershipCell = ({item, value}) => {

    const _value = value || 450;
    // Render item
    const renderList = () => {
        if (_value === 450) {
            return(
                <View style={styles.detailForm}>
                    <CardView cardElevation={2}
                              cardMaxElevation={8}
                              cornerRadius={2}
                              style={[styles.detailCard, { backgroundColor: '#C0FF8C',}]}>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <View style={{flex: 1}}>
                                <Text>Ngày: 5/5/2020</Text>
                                <Text>Số giờ làm: 10h</Text>
                            </View>
                        </View>
                    </CardView>
                </View>
            )
        }else if (_value === 150) {
            return (
                <View style={styles.detailForm}>
                    <CardView cardElevation={2}
                              cardMaxElevation={8}
                              cornerRadius={2}
                              style={[styles.detailCard, { backgroundColor: '#FFD08C',}]}>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <View style={{flex: 1}}>
                                <Text>Ngày: 5/5/2020</Text>
                                <Text>Số giờ tăng ca: 2h</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text>Thời gian: 10h - 12h</Text>
                            </View>
                        </View>
                    </CardView>
                </View>
            )
        }else {
            return (
                <View style={styles.detailForm}>
                    <CardView cardElevation={2}
                              cardMaxElevation={8}
                              cornerRadius={2}
                              style={[styles.detailCard, { backgroundColor: '#FFF78C',}]}>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <View style={{flex: 1}}>
                                <Text>Ngày: 5/5/2020</Text>
                                <Text>Số giờ làm: 10h</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text>Lý do: Hỏng xe</Text>
                                <Text>Thời gian: 10h - 12h</Text>
                            </View>
                        </View>
                    </CardView>
                </View>
            )
        }
    };

    return (
        <View style={styles.container}>
            {
                renderList()
            }
        </View>
    );
};

export default ReportMembershipCell;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    detailForm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailCard: {
        justifyContent: 'center',
        marginTop: 5,
        width: width - 80,
    },
});
