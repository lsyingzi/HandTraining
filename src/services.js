export const fetchRandomData = async ({count = 1,number = 10} = {}) => {
    return fetch(`https://cnodejs.org/api/v1/topics?page=${count}&limit=${number}`,{ mode: "cors"}).then(data=>data.json());
}
export const fetchRandomDataCon = async (id) => {
    return fetch(`https://cnodejs.org/api/v1/topic/${id}`,{ mode: "cors"}).then(data=>data.json());
}