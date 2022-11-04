import React from "react";
import { ScrollView } from "react-native";
import Comment from "../../components/comment";

export default function Comments() {
    return (
        <ScrollView>
            <Comment />
        </ScrollView>
    )
}