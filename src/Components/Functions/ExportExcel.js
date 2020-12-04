import React from 'react'

const xls = require('simple-export-excel');
var fs = require('fs');

export const Excel = (name, data) => {		
    const url = 'https://rjo7zaf6jb.execute-api.us-west-2.amazonaws.com/dev/exportexcel?name='+name+'&data='+encodeURI(JSON.stringify(data));
    window.open(url); 
}