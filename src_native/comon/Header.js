import React from 'react'
import {View,TouchableOpacity,Image} from 'react-native'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <View style={{justifyContent:'space-between',height:64,backgroundColor: '#00c497'}}>
                <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:10}}>
                    <TouchableOpacity onPress={()=> this.props.nav.goBack()}>
                        <Image source={require('../icon/leftArrow.png')} style={{width:25,height:25,tintColor:'#fff'}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/comments.png')} style={{width:25,height:25,tintColor:'#fff'}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/Aa.png')} style={{width:25,height:25,tintColor:'#fff'}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/newspaper.png')} style={{width:20,height:20,}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/share.png')} style={{width:25,height:25,tintColor:'#fff'}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
