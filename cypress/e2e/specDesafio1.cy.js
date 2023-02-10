
import sigFolha from "../Pages/sigFolha";

describe('SIG - FOLHA', () => {
  beforeEach(() => {
    cy.visit('http://167.250.26.147:8080/sigAutomacao/index.html?next=folha.pessoa')
    cy.title().should('eq', 'SIG - Prodata Informática')
  
  
  });
  it('Executando Login e Buscando dependentes', () => {
    sigFolha.loginUser()
    sigFolha.loginPw()
    sigFolha.loginAcessar()
    
     cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
     .as('login')
     cy.wait('@login')
    //  sigFolha.validaPagina()  
    sigFolha.typeCode()
    sigFolha.searchCode()
    sigFolha.getDependente()
    sigFolha.btnAdicionar()
    sigFolha.addNomeDep()
    sigFolha.pesquisarGender()
    sigFolha.parentescoDep()
    sigFolha.dataNasc()
    sigFolha.universitario()
    sigFolha.dependencia()
    sigFolha.adcEsair()
    cy.get('.ui-grid-viewport').contains('NÃO').scrollIntoView({ duration: 3000 }).should('be.visible')
    sigFolha.btnEditar() 

    
    //sigFolha.rollBar()
   //cy.get('.ui-grid-viewport').click('').scrollTo('right')
   //cy.get('.ui-grid-viewport').scrollIntoView({ offset: {  right: 150 } })
   
   
     



  });  

 
  // it('Limpar e Editar', () => {  
  //   sigFolha.loginUser()
  //   sigFolha.loginPw()
  //   sigFolha.loginAcessar()
    
  //    cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
  //    .as('login')
  //    cy.wait('@login')

  //   //sigFolha.btnLimpar()
  //   sigFolha.btnVoltar()
  //   sigFolha.limpaNome()
  //   sigFolha.limpaNomeSocial()
  //   sigFolha.nomeEdit()
  //   sigFolha.nomeSocialEdit()
  //   sigFolha.btnSaveForm()
  //   sigFolha.successMsg()
  //  })

   
  
 
  
})