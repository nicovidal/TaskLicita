import React from 'react'
import { HeadDate } from '../components/headDate'
import { TaskCard } from '../components/TaskCard'
import { TaskFilter } from '../components/TaskFilter'
import { AddTaskCard } from '../components/AddTaskCard'
import { TaskModal } from '../components/TaskModal'

export const TaskMainPage = () => {
  return (
    <>
    <HeadDate/>
    <TaskFilter/>
    <TaskCard/>
    <AddTaskCard/>

    <TaskModal/>


    </>
  )
}
