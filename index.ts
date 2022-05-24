const EVENT_ID = '628d16406914dbe960f932ec';
const ITA_START_DATE_TIME = '28/05/2022 22:00';
const ITA_END_DATE_TIME = '29/05/2022 04:00';

const initialStartDate = ITA_START_DATE_TIME.split(' ')[0].split(/\//);
const startDate = new Date([ initialStartDate[1], initialStartDate[0], initialStartDate[2] ].join(
  '/') + ' ' + (ITA_START_DATE_TIME.split(' ')[1] || '12:00'));


const initialEndDate = ITA_END_DATE_TIME.split(' ')[0].split(/\//);
const endDate = new Date([ initialEndDate[1], initialEndDate[0], initialEndDate[2] ].join(
  '/') + ' ' + (ITA_END_DATE_TIME.split(' ')[1] || '12:00'));


console.log(`
eventId: ${ EVENT_ID }
startDate: ${ startDate.toISOString() }
endDate: ${ endDate.toISOString() }
`);
