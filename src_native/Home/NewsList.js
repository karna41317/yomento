import React from 'react'
import {Image,View,Text,TouchableOpacity} from 'react-native'
import Hr from 'react-native-hr'
export default NewsList = ({item}) => {

    return(
        <View key={item._id}>

            <TouchableOpacity >
                <View style={[styles.cardStyle,{marginTop:22}]}>
                    <Text style={styles.articleTitle}>{item.title}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                            <Image
                                source={require('../icon/clock.png')}
                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                            <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold',fontSize: 12}}>ENVIRONMENT</Text>
                            </TouchableOpacity>
                            <Hr lineColor="#8c8c8c" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Hr lineColor="#ccc" />
        </View>

    )
}