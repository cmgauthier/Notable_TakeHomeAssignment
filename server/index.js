const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let physicianList = [
    {'id': 1, 'name': 'Hibbert, Julius'},
    {'id': 2, 'name': 'Krieger, Algermop'},
    {'id': 3, 'name': 'Riviera, Nick'}
];

let physicianCalendar = {
    'Hibbert, Julius': [
        {'name': 'Kit Ko', 'time': '8:00AM', 'kind': 'New Patient'},
        {'name': 'Justin White', 'time': '8:30AM', 'kind': 'Follow-up'},
        {'name': 'Caroline Leone', 'time': '9:00AM', 'kind': 'Follow-up'},
        {'name': 'Tim Lin', 'time': '9:30AM', 'kind': 'New Patient'}
    ],
    'Krieger, Algermop': [
        {'name': 'Sam Motamedi', 'time': '8:00AM', 'kind': 'Follow-up'},
        {'name': 'Yuta Kanbayashi', 'time': '8:30AM', 'kind': 'Follow-up'},
        {'name': 'Pranay Kpadia', 'time': '9:00AM', 'kind': 'New Patient'},
        {'name': 'Adam Ting', 'time': '9:30AM', 'kind': 'Follow-up'},
    ],
    'Riviera, Nick': [
        {'name': 'Andy Dam', 'time': '8:30AM', 'kind': 'Follow-up'},
        {'name': 'Guatam Sanka', 'time': '8:30AM', 'kind': 'New Patient'},
        {'name': 'Sam Barnes', 'time': '8:30AM', 'kind': 'Follow-up'},
    ]
};


app.get('/physicians', (req, res) => {
    res.status(200).send(physicianList);
});

app.get('/physicians/:name/patients', (req, res) => {
    const { name } = req.params;
    res.status(200).send(physicianCalendar[name]);
});

app.listen(process.env.PORT || 8080);