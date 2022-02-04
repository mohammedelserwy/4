

import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
class App extends Component {
  render() {
    return (
      <View style={firstPageStyles.pageView}>
        <TouchableOpacity>
          <View style={firstPageStyles.itemView}>
            <Image source={require('./components/assets/images/iconTwo.png')} />
            <Text style={firstPageStyles.seventhText}>تسجيل دخول</Text>
          </View>
        </TouchableOpacity>

        <View style={firstPageStyles.firstView}>
          <View style={firstPageStyles.secondView}>
            <Text style={firstPageStyles.firstText}>
              من فضلك أدخل المعلومات التالية
            </Text>
            <View >
              <Text style={firstPageStyles.secondText}>رقم الموظف </Text>
              <TextInput style={firstPageStyles.firstTextInput} />
            </View>

            <Text style={firstPageStyles.thirdText}>كلمه المرور </Text>
            <View >
              <TouchableOpacity style={firstPageStyles.iconDirection}>
                <Image
                  style={firstPageStyles.icon}
                  source={require('./components/assets/images/eye.png')}
                />
              </TouchableOpacity>

              <TextInput secureTextEntry={true} style={firstPageStyles.secondTextInput} />

            </View>
            <View style={firstPageStyles.fifthView}>
              <View style={firstPageStyles.seventhView} >
                <View style={firstPageStyles.sixthView}></View>
                <Text style={firstPageStyles.eighthText}  >تذكرني</Text>

              </View>
              <View style={firstPageStyles.passwordView}>
                <Text style={firstPageStyles.passwordText}> نسيت كلمة المرور؟ </Text>
              </View>
            </View>

          </View>
          <TouchableOpacity style={firstPageStyles.bottom}>
            <View style={firstPageStyles.thirdView}>
              <Text style={firstPageStyles.fifthText}>تسجيل دخول</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;
