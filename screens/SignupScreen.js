import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Signupfooter from '../components/Signup/Signupfooter'
import Signupform from '../components/Signup/Signupform'
const SignupScreen = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#242526"}}>
            <Text style={{textAlign:'center', fontSize:18, color:"#b0b3b8"}}>Esomaz</Text>
            <Divider style={{marginTop:15}} width={1} orientation='horizontal' color='#b0b3b8'/>
            <Signupform />
            <Signupfooter />
        </SafeAreaView>
    )
}

export default SignupScreen
