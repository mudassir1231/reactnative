import React from 'react';
import { Button, View } from 'react-native';
import { ImageBackground,StyleSheet ,Text,SafeAreaView,Image} from 'react-native';

function W2(props) {
    // const url='https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1'
    // fetch(url).then((response)=>response.json()).then((data)=>{ y = data } ) 
    // console.log(y['name'],"data")
    
    

    return (<>

    <SafeAreaView style={{flex:1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
    }}>



<View style={{alignItems: 'center',
     justifyContent: 'center',margin:20,display:'flex',flexDirection:'row'}}>
   </View>



<View style={{display:'flex',flexDirection:'row'}}>
<View style={{display:'flex',flexDirection:'column',flex:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:1,fontWeight:'bold'}}>Mashala Muglai</Text>

<Text style={{fontSize:10,margin:10}}>Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat </Text>
</View>
<Image style={{ height:200,width:300,marginRight:-100}} source={require('../IMG/m.png')}>    
</Image>

</View>


<View style={{display:'flex',flexDirection:'column',flex:1,borderColor:'back',borderWidth:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:1,fontWeight:'bold'}}>Ingredients</Text>

<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>


<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>



<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>




</View>







<View style={{display:'flex',flexDirection:'column',flex:1,borderColor:'back',borderWidth:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:1,fontWeight:'bold'}}>Ingredients</Text>

<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>


<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>



<View style={{display:'flex',flexDirection:'column'}}>
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:15,margin:10,flex:1}}>Biryani</Text>
<Text style={{fontSize:15,margin:10}}>01 pc</Text>
</View>
</View>




</View>











</SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
})

export default W2;