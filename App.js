import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppContainer from './navigation/BottomTab'

class App extends React.Component {
  state = { loading: true }

  async componentDidMount () {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) return <Text>Loading...</Text>
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
