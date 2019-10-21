const studentJSON = 
{
    'count': 3,
    'guys':[
        {'Person_name': 'Mathew',
         'Person_surname': 'Danilevich',
         'Person_age': 18,
         'average_mark': 7.875,},
        {'Person_name': 'Ilya',
        'Person_surname': 'Lukashevich',
        'Person_age': 18,
        'average_mark': 7,},
        {'Person_name': 'Yasha',
        'Person_surname': 'Zhoravich',
        'Person_age': 18,
        'average_mark': 6,},
    ]
}


class student{
    constructor(studentJSON = {'Person_name': 'Mathew','Person_surname': 'Danilevich','Person_age': 18,'average_mark': 7.875,}, i = 0)
    {
        this.Person_name = studentJSON['guys'][i]['Person_name'];
        this.Person_surname = studentJSON['guys'][i]['Person_surname'];
        this.Person_age = studentJSON['guys'][i]['Person_age'];
        this.average_mark = studentJSON['guys'][i]['average_mark'];
    }
    show()
    {
        alert (this.Person_name +' '+ this.Person_surname +' '+ this.Person_age +' '+ this.average_mark);
    }
    put_a_row(){
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(this.Person_name))
        tr.appendChild(td);
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(this.Person_surname))
        tr.appendChild(td);
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(this.Person_age))
        tr.appendChild(td);
        var td = document.createElement('td');
        td.setAttribute('id', 'average_mark');
        td.appendChild(document.createTextNode(this.average_mark));
        tr.appendChild(td);
        return tr;
    }
};

function create_array() {
    let arr = new Array();
    for (let i = 0; i < studentJSON['count']; i++)
    arr[i] = new student(studentJSON, i);
    return arr;
}

function table(list){
    var tbdy = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < list.length; i++) {
        let tr = list[i].put_a_row();
        tbdy.appendChild(tr);
    }
    let avg = 0;
    for (let i = 0; i < list.length; i++)
    {
        let mid = document.getElementById('average_mark');
        avg += parseFloat(mid.innerText);
        mid.removeAttribute('id');
    }
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.setAttribute('colspan', '3');
    td.appendChild(document.createTextNode('Average:'));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode((avg/list.length).toFixed(2)));
    tr.appendChild(td);
    tbdy.appendChild(tr);
}

function calculate()
{
    let list = create_array();
    table(list);
}
