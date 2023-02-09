
import sigFolha from "../Pages/sigFolha";

describe('SIG - FOLHA', () => {
  beforeEach(() => {
    cy.visit('http://167.250.26.147:8080/sigAutomacao/index.html?next=folha.pessoa')
    cy.title().should('eq', 'SIG - Prodata Informática')
  
  
  });
  it('Executando Login e Preenchendo formulario', () => {
    sigFolha.loginUser()
    sigFolha.loginPw()
    sigFolha.loginAcessar()
    
     cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
     .as('login')
     cy.wait('@login')
    //  sigFolha.validaPagina()  
     sigFolha.nameForm()
     sigFolha.numberPis()
     sigFolha.numberCPF()
     sigFolha.bornDate()
     sigFolha.gender()
     sigFolha.civilState()
     sigFolha.education()
     sigFolha.curse()
     sigFolha.motherName()
     sigFolha.nationality()
     sigFolha.naturalness()
     sigFolha.btnSaveForm()
     sigFolha.successMsg()
   
     
     



  });  

 
  it('Limpar e Editar', () => {  
    sigFolha.loginUser()
    sigFolha.loginPw()
    sigFolha.loginAcessar()
    
     cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
     .as('login')
     cy.wait('@login')

    //sigFolha.btnLimpar()
    sigFolha.btnVoltar()
    sigFolha.limpaNome()
    sigFolha.limpaNomeSocial()
    sigFolha.nomeEdit()
    sigFolha.nomeSocialEdit()
    sigFolha.btnSaveForm()
    sigFolha.successMsg()
   })

   it('Deleta', () => {  
    sigFolha.loginUser()
    sigFolha.loginPw()
    sigFolha.loginAcessar()
    
     cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
     .as('login')
     cy.wait('@login')

     sigFolha.btnVoltar()
     sigFolha.deletaCadastro()
     sigFolha.confirmaDelete()
     sigFolha.validaDelete()

    
   })
 
  
 
  
})