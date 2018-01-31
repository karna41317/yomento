import React from 'react'
import {View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions} from 'react-native'
import Hr from 'react-native-hr'
import styles from './Styles'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../comon/Header'


const WIDTH = Dimensions.get('window').width

class Comments extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            status:true,
        }
    }
    find_dimension(event){
        const {height,width} = event.nativeEvent.layout
        this.setState({viewWidth: width})
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
                <Header nav={this.props.navigation} />
                <View style={styles.header}>
                    <Text style={styles.headerText}>23 COMMENTS</Text>
                </View>
                <ScrollableTabView
                    renderTabBar={()=><DefaultTabBar backgroundColor='#01cca1'  />}
                >
                    <ScrollView tabLabel='Best' style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />

                    </ScrollView>
                    <ScrollView tabLabel='Newest' style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />

                    </ScrollView>
                    <ScrollView tabLabel='Oldest' style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1.5,padding:5}}>
                                <Image
                                    source={require('../images/tech.jpg')}
                                    style={{height:40,width:40,borderRadius:20}}
                                />
                            </View>

                            <View
                                style={[styles.cardStyle,{marginTop:22}]}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                        <Image
                                            source={require('../icon/heart.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                        <Text style={{fontSize: 12}}>12</Text>
                                    </View>

                                </View>
                                <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />

                    </ScrollView>
                </ScrollableTabView>

            </View>
        )
    }
}


export default Comments