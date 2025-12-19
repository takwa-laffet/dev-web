import {fetchData} from './featchdata';
 test('fetch data from API', async () => {
    const data = await fetchData();
/*     expect(data).toHaveProperty('name',"hi everybody"); */
 
});
jest.mock("./featchdata", () => ({
  fetchData: jest.fn(() =>
    Promise.resolve({
      userId: 3,
      id: 2,
      title: "mocked title",
      completed: true
    })
  )
}));
jest.mock('./featchdata');
const api={
    getUser:jest.fn(()=>({name:"takwa"}))
};
