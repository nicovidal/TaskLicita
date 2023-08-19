import React from 'react'
import { TaskMainPage } from './TaskMainPage/page/TaskMainPage'
import { Provider } from "react-redux"
import { store } from "./store/store"


export const TaskApp = () => {
  return (
    <>
      <Provider store={store }>
      <TaskMainPage/>
      </Provider>
    </>
  )
}
