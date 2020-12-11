import * as React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class ReceiverScreen extends React.Component{
    constructor(){
        super();
        console.log("HI", this.props.navigation.getParam('Details'));
        /*this.state={
            userId:firebase.auth().currentUser.email,
            receiverId:this.props.navigation.getParam("Details")["userId"],
            requestId:this.props.navigation.getParam("Details")["requestId"],
            bookName:this.props.navigation.getParam("Details")["bookName"],
            reason:this.props.navigation.getParam("Details")["reason"],
            receiverName:"",
            receiverContact:"",
            receiverAddress:"",
        }*/
    }

    getReceiverDetails=()=>{
        db.collection(Users).where("email","==",this.state.receiverId).get()
        .then(
            snapshot=>{
                snapshot.forEach(doc=>{
                    this.setState({
                        receiverName:doc.data().firstName,
                        receiverAddress:doc.data().address,
                        receiverContact:doc.data().contact,
                    })
                })
            }
        )
    }

    componentDidMount=()=>{
        console.log("HI");
        //this.getReceiverDetails();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.3}}>
                    <Card title="Book Information" titleStyle={{fontSize:20}}>
                        <Card>
                            <Text style={{fontWeight:"bold"}} >
                                Name:{this.state.bookName}
                            </Text>
                        </Card>
                    </Card>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})