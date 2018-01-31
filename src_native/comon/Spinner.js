import React from 'react'
import { View,ActivityIndicator } from 'react-native'

const Spinner = ({size,color}) => {
    return(
        <View style={styles.Container}>
            <ActivityIndicator size={size || 'small'} color={color || '#ccc'} />
        </View>

    )
}
const styles = {
    Container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
export default Spinner