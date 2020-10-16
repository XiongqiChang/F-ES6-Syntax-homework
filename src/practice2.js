const inject = (items, sections) => {


    let result = [...items];
    sections.forEach((element,i) => {
        result.splice(element.index + i, 0, element.content);
    });

     return result;
  };
  export { inject };
  
