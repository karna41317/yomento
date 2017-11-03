import React from 'react'
import {View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight} from 'react-native'
import renderIf from './renderif'
import {StackNavigator} from 'react-navigation'
import { Col, Row, Grid } from "react-native-easy-grid";
import Channel from './Channel'
import {Icon} from 'react-native-elements'

class ChannelGrid extends React.Component {
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon: <Icon name="apps" color="white" />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('HOME')}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 26,width: 26,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" color="white" size={30} style={{marginRight:10}} />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }

    constructor(props){
        super(props);
        this.state ={
            status:true,
            buttonPress: true,
        }
    }


    showView(){
        this.setState({status: true})
        this.setState({buttonPress: true})

    }
    showView2(){
        this.setState({status: false})
        this.setState({buttonPress: false})

    }


    render(){
        return(
            <View style={{flex:1}}>

                <View style={styles.topTab}>
                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonPress : styles.buttonStyle }
                                        onPress={()=> this.showView()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>CardView</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonStyle : styles.buttonPress}
                                        onPress={()=> this.showView()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>CardView</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonStyle : styles.buttonPress }  onPress={()=> this.showView2()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>Slider</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {renderIf(this.state.status)(

                        <View style={{flex:1}}>
                            <Grid>
                                <Row>
                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>
                                        <Image source={require('../images/fashion.png')} style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>


                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>
                                        <Image source={require('../images/science.jpg')} style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>

                                </Row>

                                <Row>
                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>

                                        <Image source={require('../images/auto.jpg')} style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>
                                        <Image source={require('../images/tech.jpg')} style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>
                                </Row>
                                <Row>
                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>
                                        <Image source={require('../images/calculator-1516869_1920.jpg')}
                                               style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Channel')}>
                                        <Image source={require('../images/flower.jpg')} style={styles.imgStyle}  />
                                    </TouchableWithoutFeedback>

                                </Row>
                            </Grid>
                        </View>

                    )}
                    {renderIf(!this.state.status)(
                        <View>


                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const styles = {
    imgStyle:{
        width: Dimensions.get('window').width/2,
        height: null,
        flex:1,
    },
    topTab:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#01cca1',
    },
    buttonStyle:{
        flex:1,
        borderRadius: 50,
    },
    buttonPress:{
        flex:1,
        padding: 10,
        marginLeft:2,
        marginRight:2,
        borderWidth:1,
        borderColor: '#01fec7',
        borderRadius: 50
    },
    content:{
        flex:1,
    },
    cardStyle:{
        backgroundColor: '#80bfff',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderColor: '#ccc'
    }

}

const ChannelGridNav = StackNavigator({
    ChannelGrid:{screen:ChannelGrid},
    Channel:{screen:Channel}
})

export default ChannelGridNav