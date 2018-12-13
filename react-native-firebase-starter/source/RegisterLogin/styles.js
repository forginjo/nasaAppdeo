import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create ({
    mainContainerView: {
        width,
        height,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonContainer:{
        backgroundColor:'black',
        marginTop: 20,
        
        color:'white',
       
    },
    Image: {
       
        width:131,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
     
    },
    imageView: {
        backgroundColor: 'black',
        width:150,
        height: 150,
       
        
    },
    loginScreenMain: {
        backgroundColor:'rgb(175,175,175)',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'center',
          
    },
    registerButtonText:{
        color:'white',
        fontSize:18,
        padding:8,
    },

    registerTextContainer:{
        fontSize:18,
        padding:8,
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:1,
       width:"40%",
       marginTop:20
    },
    registerTextContainerBigView: {
        width: '80%',
        marginTop:20,
    },
    registerUpText:{
        fontSize:18,
        padding:8,

    },
    registerConfirm:{
       justifyContent:'center'
    },
    registerTextContainerBig:{
        fontSize:18,
        padding:8,
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:1,
       width:200
    },
    registerButton:{
        backgroundColor: 'white',
        width: '30%',
        height:'15%',
        marginLeft: 8,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems:'center',
    },
    registerScreenMain : {
        backgroundColor:'rgb(175,175,175)',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',

    },
    registerText: {
        color: 'rgb(175,175,175)',
        fontSize: 18,
    },
    signInButton: {
        backgroundColor: 'rgb(175,175,175)',
        width: '30%',
        height:'15%',
        justifyContent: 'center',
        alignItems:'center',
        marginRight: 8,
        borderRadius: 2,

    },
    subTitleView: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
    },
    subTitleText: {
        fontSize: 18, 
        color: 'white'
    },
    signInText: {
        color: 'white',
        fontSize: 18,

    },
    titleText:{
        color:'white',
        fontSize: 35,
        fontWeight: 'bold', 
    },
    titleView: {
        flex: 2,
        marginTop: 20,
        backgroundColor: 'black',
        justifyContent:'flex-end',
        alignItems:'center',
    }

});


export default styles;