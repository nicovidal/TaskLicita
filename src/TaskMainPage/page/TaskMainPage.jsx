import React from 'react'
import { HeadDate } from '../components/headDate'
import { AddTask } from '../components/AddTask'
import { TaskFilter } from '../components/TaskFilter'

export const TaskMainPage = () => {
  return (
    <>
    <HeadDate/>
    <TaskFilter/>
    <AddTask/>
    </>
  )
}
