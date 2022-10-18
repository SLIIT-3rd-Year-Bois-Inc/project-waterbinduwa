import React from "react";
import { Button, Text, View } from "react-native";
import {
    createStackNavigator,
    StackNavigationOptions,
    StackScreenProps,
  } from '@react-navigation/stack';

export type SimpleStackParams = {
    Posts: { author: string } | undefined;
    NewsFeed: { date: number };
    Albums: undefined;
    Search: undefined;
};
  
export default function Search({ navigation, route }: StackScreenProps<SimpleStackParams,'Search'>) {
    return (
        <View>
            <Text>Search Posts</Text>
            <Button
                title="Go to Posts"
                onPress={() => { navigation.push('Posts') }}
            ></Button>
        </View>
    )
}