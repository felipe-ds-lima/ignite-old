import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Felipe Lima',
    duration: 10,
  })

  return response.send()
}
