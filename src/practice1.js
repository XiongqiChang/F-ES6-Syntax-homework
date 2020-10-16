const parseData = function (inputdata) {
    

    let data = inputdata.data;
    let column = inputdata.column;
    let result = [];

  for (let dataItem of data) {
        let newObj = {};
        let  index = 0;

        for (let nameItem of column) {
            newObj[nameItem.name] = dataItem[index];
            index++;
        }
        result.push(newObj);
    }

    return result;
    


   
}
export { parseData };
