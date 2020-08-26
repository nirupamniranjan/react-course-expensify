import moment from 'moment'
export default  [
    {
        id:'1',
        description:'beer',
        note:'',
        amount:125,
        createdAt:moment(0).valueOf()
    },
    {
        id:'2',
        description:'Pizza',
        note:'',
        amount:12500,
        createdAt:moment(0).subtract(3,'days').valueOf()
    },
    {
        id:'3',
        description:'nuggets',
        note:'',
        amount:9000,
        createdAt:moment(0).add(4,'days').valueOf()
    }
];