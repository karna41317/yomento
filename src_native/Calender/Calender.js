import React from 'react'
import {View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions} from 'react-native'
import Hr from 'react-native-hr'
import {StackNavigator} from 'react-navigation'
import Calendar from 'react-native-calendar'
import {Icon} from 'react-native-elements'

var dateFormat = require('dateformat');
var now = new Date();

class Calender extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon:  <Icon name="date-range" color="white"  />,
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

    render(){
        const curdate = dateFormat(now, "isoDate")

        return(
            <ScrollView>
                <Calendar
                    // Optional date to set the currently displayed month after initialization
                    customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
                    dayHeadings={['Sun','Mon','Tue','Wed','Thu','Fri','Sat']}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
                    // eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator

                    monthNames={['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']}                // Defaults to english names of months
                    nextButtonText={'Next'}           // Text for next button. Default: 'Next'
                    //  onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
                    onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
                    onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
                    onTouchNext={this.onTouchNext}    // Callback for next touch event
                    onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
                    onTitlePress={this.onTitlePress}  // Callback on title press
                    prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
                    removeClippedSubviews={false}     // Set to false for us within Modals. Default: true

                    scrollEnabled={true}              // False disables swiping. Default: False
                    selectedDate={curdate}       // Day to be selected

                    showControls={true}               // False hides prev/next buttons. Default: False
                    showEventIndicators={true}        // False hides event indicators. Default:False
                    startDate={curdate}          // The first month that will display. Default: current month
                    titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
                    today={curdate}              // Defaults to today
                    weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
                />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/fashion.png')} style={{height:90,width:80}} />
                    </View>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>style.com</Text>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>FASHION</Text>
                                </TouchableOpacity>
                                <Hr lineColor="#8c8c8c" />
                            </View>
                        </View>
                    </View>
                    <Hr lineColor="#ccc" />
                </View>
                <Hr lineColor="#ccc" />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                    </View>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                </TouchableOpacity>
                                <Hr lineColor="#8c8c8c" />
                            </View>
                        </View>
                    </View>
                    <Hr lineColor="#ccc" />
                </View>
                <Hr lineColor="#ccc" />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                    </View>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                </TouchableOpacity>
                                <Hr lineColor="#8c8c8c" />
                            </View>
                        </View>
                    </View>
                    <Hr lineColor="#ccc" />
                </View>
                <Hr lineColor="#ccc" />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                    </View>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                </TouchableOpacity>
                                <Hr lineColor="#8c8c8c" />
                            </View>
                        </View>
                    </View>
                    <Hr lineColor="#ccc" />
                </View>
                <Hr lineColor="#ccc" />
            </ScrollView>
        )
    }
}

const styles = {
    cardStyle:{
        flex:3,
        padding: 10,
    },
    articleTitle:{
        paddingBottom: 15,
        fontWeight: 'bold',
    },
}

const CalenderNav = StackNavigator({
    Calender:{screen: Calender}
})


export default  CalenderNav
