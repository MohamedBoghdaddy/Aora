import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {itemId}</Text>
            <Text>Other Param: {otherParam}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default DetailsScreen;
