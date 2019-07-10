import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Coffee',
    note: '',
    amount: 150,
    createdAt: 0,
  },
  {
    id: 2,
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: 3,
    description: 'Rent',
    note: '',
    amount: 54500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];
