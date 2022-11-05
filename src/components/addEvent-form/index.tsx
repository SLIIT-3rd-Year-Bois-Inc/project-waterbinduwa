import React from 'react'
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Online',
    value: 'Online',
}, {
    id: '2',
    label: 'On premises',
    value: 'OnPremises',
    labelStyle:{color:'#00727C'}
}]
function AddEventForm() {
    const [eventName, onEventName] = React.useState("");
    const [date, setDate] = React.useState(new Date())
    const [dateOpen, setDateOpen] = React.useState(false);
    const [radioButtons, setRadioButtons] = React.useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray:any) {
        setRadioButtons(radioButtonsArray);
    }



    return (
        <View style={styles.container}>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Event Name</Text>
                <TextInput
                    style={styles.formElementInput}
                    onChangeText={onEventName}
                    value={eventName}
                    placeholder='Event Name'
                />
            </View>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Event Date and Time</Text>
                <TextInput

                    style={styles.formElementInput}
                    onPressIn={() => setDateOpen(true)}
                    onChangeText={onEventName}
                    value={date.toLocaleString()}
                />
                <DatePicker
                    modal
                    open={dateOpen}
                    date={date}
                    onConfirm={(date) => {
                        setDateOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setDateOpen(false)
                    }}
                />
            </View>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Event Type</Text>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    containerStyle={{display:'flex', flexDirection:'row', padding:10}}
                />

            </View>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Event Link(Registration or meeting)</Text>
                <TextInput
                    style={styles.formElementInput}
                    onChangeText={onEventName}
                    value={eventName}
                    placeholder='Event Link'
                />
            </View>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Purpose</Text>
                <TextInput
                    style={styles.formElementInput}
                    onChangeText={onEventName}
                    value={eventName}
                    placeholder='Purpose'
                />
            </View>
            <View style={styles.formElement}>
                <Text style={styles.formElementLable}>Description</Text>
                <TextInput
                    style={styles.formElementInput}
                    onChangeText={onEventName}
                    value={eventName}
                    placeholder='Description'
                />
            </View>
            


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "column",
        padding: 5
    },
    formElement: {
        marginBottom: 10,
    },
    formElementLable: {
        paddingLeft: 20,
        color: '#00727C',
        fontWeight:'bold'
    },
    formElementInput: {
        color: '#00727C',
        borderRadius: 20,
        height: 50,
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#11ACBA',
        borderWidth: 2,
        padding: 10,
        paddingLeft: 10,
        fontWeight: 'bold'
    }


});


export default AddEventForm;
