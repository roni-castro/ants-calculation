import {StatusBar} from 'expo-status-bar'
import {store} from '@redux/store'
import {Provider} from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react'
import Home from '@screens/Home'
import {antsApi} from '@services/ants'

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <ApiProvider api={antsApi}>
          <Home />
        </ApiProvider>
      </Provider>
    </>
  )
}
