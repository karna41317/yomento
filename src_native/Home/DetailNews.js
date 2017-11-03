import React from 'react'
import {View,
    Dimensions,
    Image,
    TouchableOpacity,
    Text,
    ScrollView} from 'react-native'
import ImageSlider from 'react-native-image-slider';
import {Icon} from 'react-native-elements'
import Header from '../comon/Header'
import {connect} from 'react-redux'
import {selectedNews} from '../redux/action'
import {news} from "../../services/apiConstant";
import * as Constant from '../Helpers/constant'


class DetailNews extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 25,width: 25,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Image
                        source={require('../icon/nav.png')}
                        style={{height: 32,width: 35,marginRight:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header nav={this.props.navigation} />
            <ScrollView bounces={false}  style={{flex:1,backgroundColor:'#fff'}}>

                <Image source={require('../images/bridge.jpeg')}  style={{justifyContent:'flex-end',height:Constant.height/2,width:null}} >
                        <Text style={{backgroundColor:'transparent',color:'#fff',padding:10,fontWeight:'bold'}}>
                            {this.props.data.title}
                        </Text>
                </Image>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                        <Image
                            source={require('../icon/clock.png')}
                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                        <Text style={styles.p}>1h ago</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.p}>{this.props.data.category}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <View style={styles.noteView}>
                    <Text style={styles.note}>Lorem Ipsum is simply dummy text of the printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting ind</Text>
                </View>
                <Text style={styles.desc}>The flat UI design adds an aesenthic and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text style={styles.desc}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </Text>

                <ImageSlider
                    height={Constant.height/3.5}
                    images={[
                    require('../images/flower.jpg'),
                    require('../images/tech.jpg'),
                    require('../images/science.jpg')
                ]}/>
                <View style={styles.next}>
                    <TouchableOpacity>
                        <Text style={{color:'#41d8b7'}}>Next Story<Image source={require('../icon/rightArrow.png')}
                              style={{height:12,width:12,tintColor:'#41d8b7'}} />  </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                <View style={styles.shareButton} >
                    <Icon size={30} name="share" color="white" />
                </View>
            </View>
        )
    }
}

const styles = {
    p:{
        fontWeight:'bold',
        fontSize: 12
    },
    desc:{
        fontWeight:'bold',
        fontSize: 12,
        padding:15
    },
    noteView:{
        borderLeftWidth:2,
        borderLeftColor: '#62dfc4',
        margin:15,
        marginTop:0,
        paddingLeft:10
    },
    note:{
        fontWeight:'bold',
        fontSize: 12,
        color: '#62dfc4'
    },
    next:{
        backgroundColor: '#fff',
        padding:5,
        justifyContent:'center',
        alignItems: 'center'
    },
    shareButton:{
        marginTop:Constant.height-70,
        marginLeft: Constant.width-70,
        height:50,
        width:50,
        borderRadius:25,
        justifyContent:'center',
        backgroundColor:'#00c497',
        position:'absolute'
    }
}
mapStateToProps = ({ news }) =>{
    return{
        data: news.selected
    }
}
export default connect(mapStateToProps,{selectedNews})(DetailNews)