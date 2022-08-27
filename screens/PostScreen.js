import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostHeader from '../components/Post/PostHeader'
import PostUploader from '../components/Post/PostUploader'

const PostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#242526"}}>
            <PostHeader navigation={navigation}/>
            <PostUploader />
        </SafeAreaView>
    )
}

export default PostScreen
