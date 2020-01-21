//check if a employee names "Ashton Cox" exists

const request = require('supertest');
const lodash = require('lodash');
const assert = require('assert')

describe('GET /employee', function() {
    it('should find employee name', function(done) {
      request('http://dummy.restapiexample.com')
        .get (encodeURI('/api/v1/employees'))
        .expect('Content-Type','application/json;charset=utf-8')
        .expect(200)
        .then(response => {
            let nameListFilter = lodash.filter(response.body.data, ['employee_name','Ashton Cox']);
            //console.log(nameListFilter);
            expect(nameListFilter[0]).toHaveProperty('employee_name', 'Ashton Cox')      
            //assert.strictEqual(nameListFilter[0].name,"Ashton Cox")
            done();
        })
    })
})