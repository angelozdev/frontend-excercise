import { createStore } from 'redux';
import { reducer } from "./reducer";

/* Data */
import faker from 'faker';

export interface IIntitialState {
   articles: {
      id: number,
      title: string,
      description: string,
      author: string,
      date: Date,
      comments: Array<string>,
      img: string
   }[]
}

const initialState: IIntitialState = {
   articles: [
      {
         id: faker.random.number(100),
         title: faker.lorem.sentence(10),
         description: faker.lorem.paragraph(8),
         author: faker.name.findName(),
         date: faker.date.past(2020),
         comments: new Array(faker.random.number(20)).fill(''),
         img: faker.image.image()
      },
      {
         id: faker.random.number(100),
         title: faker.lorem.sentence(10),
         description: faker.lorem.paragraph(8),
         author: faker.name.findName(),
         date: faker.date.past(2020),
         comments: new Array(faker.random.number(20)).fill(''),
         img: faker.image.image()
      },
      {
         id: faker.random.number(100),
         title: faker.lorem.sentence(10),
         description: faker.lorem.paragraph(8),
         author: faker.name.findName(),
         date: faker.date.past(2020),
         comments: new Array(faker.random.number(20)).fill(''),
         img: faker.image.image()
      },
      {
         id: faker.random.number(100),
         title: faker.lorem.sentence(10),
         description: faker.lorem.paragraph(8),
         author: faker.name.findName(),
         date: faker.date.past(2020),
         comments: new Array(faker.random.number(20)).fill(''),
         img: faker.image.image()
      }
   ]
}

export const store = createStore(reducer, initialState);