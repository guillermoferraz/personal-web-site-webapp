/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExampleDataTypes } from "../store/types/exampleTypes"
const Example = {
  getExample: () => {
    const response: ExampleDataTypes | any = {
      id: 1,
      title: 'Example Title',
      description: 'Example Description',
      image: 'https://w0.peakpx.com/wallpaper/737/751/HD-wallpaper-ai-abstract-artificial-inteligence-blue-brain-crack-iphone-modern-patterns-samsung.jpg'
    }
    return response
  },
  postExample: (data: string) => {
    switch (data) {
      case '1':
        return <ExampleDataTypes[] | any>[
          {
            id: 1,
            title: 'Example post response 1',
            description: 'Post desription response 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8Fa4vROKGoUpEBgUX6cyVvhwGawKYCD59w&usqp=CAU'
          }
        ]
      case '2':
        return [
          {
            id: 1,
            title: 'Example post response 1',
            description: 'Post desription response 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8Fa4vROKGoUpEBgUX6cyVvhwGawKYCD59w&usqp=CAU'
          },
          {
            id: 2,
            title: 'Example post response 2',
            description: 'Post desription response 2',
            image: 'https://media.gq.com.mx/photos/5f5bac74ef6115112e88c74a/master/pass/GettyImages-1194176305.jpg'
          }
        ]
      case '3':
        return [
          {
            id: 1,
            title: 'Example post response 1',
            description: 'Post desription response 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8Fa4vROKGoUpEBgUX6cyVvhwGawKYCD59w&usqp=CAU'
          },
          {
            id: 2,
            title: 'Example post response 2',
            description: 'Post desription response 2',
            image: 'https://media.gq.com.mx/photos/5f5bac74ef6115112e88c74a/master/pass/GettyImages-1194176305.jpg'
          },
          {
            id: 3,
            title: 'Example post response 3',
            description: 'Post desription response 3',
            image: 'https://img.freepik.com/foto-gratis/concepto-procesamiento-3d-inteligencia-artificial-fondo-tecnologia-wireframes-particulas_363039-1115.jpg?w=2000'
          }
        ]
      default: 
    }
  }
}
export default Example