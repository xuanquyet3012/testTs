import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home/HomeScreen'
import DepartmentListScreen from './screens/report/DepartmentListScreen'
import ReportDepartmentScreen from './screens/report/ReportDepartmentScreen'
import ReportMembershipScreen from './screens/report/ReportMembershipScreen'
import ReportCompanyScreen from './screens/report/ReportCompanyScreen'


const Stack = createStackNavigator();

const App = () => {

    // @ts-ignore
    const navigatorOptions = ({ navigation, route }) => ({

        headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity style={styles.backTouch} onPress={() => navigation.goBack()}>
                <View style={styles.backButton}>
                    <Text>Back</Text>
                </View>
            </TouchableOpacity>
        ),
    });

    // @ts-ignore
    return (
        <NavigationContainer>
            <Stack.Navigator // @ts-ignore
                 initialRouteName={HomeScreen}>
                <Stack.Screen // @ts-ignore
                    name="Home" component={HomeScreen} />
                <Stack.Screen // @ts-ignore
                    options={navigatorOptions} name="DepartmentListScreen" component={DepartmentListScreen} />
                <Stack.Screen // @ts-ignore
                    options={navigatorOptions} name="ReportDepartmentScreen" component={ReportDepartmentScreen} />
                <Stack.Screen // @ts-ignore
                    options={navigatorOptions} name="ReportMembershipScreen" component={ReportMembershipScreen} />
                <Stack.Screen // @ts-ignore
                    options={navigatorOptions} name="ReportCompanyScreen" component={ReportCompanyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    backTouch: {
        flex: 1,
        justifyContent: 'center',
    },
    backButton: {
        marginLeft: 28,
        height: 30,
        width: 40,
        justifyContent: 'center',
    },
});

