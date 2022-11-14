///<reference types="cypress" />

// ***** How to read the excel data ****

describe('To read the data from thr ecxel file inside the fixture file',()=>{
    it('TS01 to read excel data',()=>{
        cy.parseXlsx('cypress/fixtures/grains.xlsx')
        .then(
            jsonData =>{
                console.log(jsonData)
                expect(jsonData[0].data[0]).to.contain("Cereal")
                expect(jsonData[0].data[0]).to.have.length(6)
            }
        )
    })
})