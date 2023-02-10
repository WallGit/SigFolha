

class sigFolha {

    elements= {

        loginUser: () => cy.get('input[id="usuario"]'),
        loginPw: () => cy.get('input[id="iPassword"]'),
        loginAcessar: () => cy.get('input[type="submit"]'),
       // validaPagina: () => cy.get('#title')
        // nameTab: () => cy.get('input[nat="cadastroPessoaFolhaCodigo"]'),
        nameForm: () => cy.get('input[nat="cadastroPessoaFolhaNome"]'),
        numberPis: () => cy.get('input[nat="cadastroPessoaFolhaNumeroPis"]'),
        numberCPF: () => cy.get('input[nat="cadastroPessoaFolhaCpf"]'),
        bornDate: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]'),
        gender: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]'),
        civilState: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]'),
        education: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]'),
        curse: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisCursoDescricao"]'),
        motherName: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]'),
        nationality: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisNacionalidadeSelect"]'),
        naturalness: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNaturalidade"]'),
        btnSaveForm: () => cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]'),
        successMsg : () => cy.get('.md-toast-text'),
       // btnLimpar: () => cy.get('[nat="cadastroPessoaFolhaCrudLimpar"]'),
       limpaNome: () => cy.get('input[nat="cadastroPessoaFolhaNome"]'),
        btnVoltar: () => cy.get('[nat="cadastroPessoaFolhaCodigoAnterior"]'),
        nomeEdit: () => cy.get('input[nat="cadastroPessoaFolhaNome"]'),
        limpaNomeSocial: () => cy.get('input[nat="cadastroPessoaFolhaNomeSocial"]'),
        nomeSocialEdit: () => cy.get('input[nat="cadastroPessoaFolhaNomeSocial"]'),
        deletaCadastro: () => cy.get('[nat="cadastroPessoaFolhaCrudExcluir"]'),
        confirmaDelete: () => cy.get('[nat="pdBtnAlertOKSim"]'),
        validaDelete: () => cy.get('.md-toast-text'),
        typeCode: () => cy.get('input[nat="cadastroPessoaFolhaCodigo"]'),
        searchCode: () => cy.get('[nat="cadastroPessoaFolhaCodigoPesquisa"]'),
        getDependente: () => cy.get('[nat="cadastroPessoaFolhaTabsFolhaDependentes"]'),
        btnEditar: () => cy.get('[nat="botaoEditar"]'),
        btnAdicionar: () => cy.get('[nat="cadastroPessoaFolhaDependentesGridDependentesabrirTelaDeCadastro"]'),
        addNomeDep: () => cy.get('input[nat="cadastroFolhaPessoaDependenteNomeDependente"]'),
        pesquisarGender: () => cy.get('[nat="cadastroFolhaPessoaDependenteSexoSelect"]'),
        parentescoDep: () => cy.get('[nat="cadastroFolhaPessoaDependenteParentescoSelect"]'),
        dataNasc: () => cy.get('input[nat="cadastroFolhaPessoaDependenteDataNascimento"]'),
        universitario: () => cy.get('[nat="cadastroFolhaPessoaDependenteUniversitarioSelect"]'),
        dependencia: () => cy.get('[nat="cadastroFolhaPessoaDependenteDependenciaSelect"'),
        adcEsair: () => cy.get('[nat="cadastroFolhaPessoaDependenteCrudSalvarFechar"]')
        //rollBar: () => cy.get('.ui-grid-viewport')

    
    
    
    }  // nat="cadastroPessoaFolhaCrudExcluir"

    loginUser(){
        this.elements.loginUser().type('automacao').should('be.visible')
    }

    loginPw(){
        this.elements.loginPw().type('1010').should('be.visible')
    }

    loginAcessar(){
        this.elements.loginAcessar().click()
        
    }

    // validaPagina(){
    //     this.elements.validaPagina()
    //     cy.contains('Cadastro de pessoa').should('be.visible')
        
    // }
   
    // nameForm(){  
           
    //     this.elements.nameForm().type('EU',{timeout: 5000}, { delay: 0}).should('be.visible')
    // }
    nameForm(){  
           
        this.elements.nameForm().click().type('EUMESMOTESTANDO',{ delay: 0}).should('be.visible')
    }

    numberPis(){      
        this.elements.numberPis().type('93466366086', { delay: 5}).should('be.visible')
    }

    numberCPF(){      
        this.elements.numberCPF().type('71402973047', { delay: 0}).should('be.visible')
    }

    bornDate(){      
        this.elements.bornDate().type('10/01/2000', { delay: 0}).should('be.visible')
    }

    gender(){      
        this.elements.gender().click().type('Masculino', { delay: 0}).type('{enter}').should('be.visible')
    }

    civilState(){      
        this.elements.civilState().click().type('Casado', { delay: 0}).type('{enter}').should('be.visible')
    }

    education(){      
        this.elements.education().click().type('Superior Completo' , { delay: 0}).type('{enter}').should('be.visible')
    }

    curse(){      
        this.elements.curse().click().type('ANALISE E DESENVOLVIMENTO DE SISTEMAS', { delay: 0} ).type('{enter}').should('be.visible')
    }

    motherName(){      
        this.elements.motherName().click().type('ATHENA' , { delay: 0}).type('{enter}').should('be.visible')
    }

    nationality(){      
        this.elements.nationality().click().type('Brasileiro' , { delay: 0}).type('{enter}').should('be.visible')
    }

    naturalness(){      
        this.elements.naturalness().click().type('5301183' , { delay: 0}).type('{enter}').should('be.visible')
    }

    btnSaveForm(){      
        this.elements.btnSaveForm().click({delay: 5}).should('be.visible')
    }
    successMsg(){      
        this.elements.successMsg().should('have.text', '      Registro salvo com sucesso!    ')
    }

    // btnLimpar(){      
    //     this.elements.btnLimpar().click().should('be.visible')
    // }

    btnVoltar(){      
        this.elements.btnVoltar().click().should('be.visible')
    }
    limpaNome(){      
        this.elements.limpaNome().clear().should('be.visible')
    }

    limpaNomeSocial(){      
        this.elements.limpaNomeSocial().clear().should('be.visible')
    }
    
    nomeEdit(){      
        this.elements.nomeEdit().click().type('Wallace',{ delay: 0}).should('be.visible')
    }
    
    nomeSocialEdit(){      
        this.elements.nomeSocialEdit().click().type('Wallace social',{ delay: 0}).should('be.visible')
    }
    
    deletaCadastro(){      
        this.elements.deletaCadastro().click().should('have.text', ' Excluir ')
    }
    
    confirmaDelete(){      
        this.elements.confirmaDelete().click().should('have.text', 'Sim')
    }
    
    validaDelete(){      
        this.elements.validaDelete().should('have.text', '      Registro excluído com sucesso!    ')
    }
    
    typeCode(){      
        this.elements.typeCode().click().type('145844',{ delay: 0}).should('be.visible')
    }
    searchCode(){      
        this.elements.searchCode().click()
    }
    getDependente(){      
        this.elements.getDependente().click().contains('Dependentes').should('be.visible')
    }
    btnEditar(){      
        this.elements.btnEditar().last().click().should('be.visible')
    }
    btnAdicionar(){      
        this.elements.btnAdicionar().click().should('be.visible')
    }
    addNomeDep(){      
        this.elements.addNomeDep().click().type('Zohan',{ delay: 0}).should('be.visible')
    }
    pesquisarGender(){      
        this.elements.pesquisarGender().click().type('Masculino',{ delay: 0}).type('{enter}').should('be.visible')
    }
    dataNasc(){      
        this.elements.dataNasc().click().type('10/10/2000',{ delay: 0}).should('be.visible')
    }
    universitario(){      
        this.elements.universitario().click().type('SIM',{ delay: 0}).type('{enter}').should('be.visible')
    }
    parentescoDep(){      
        this.elements.parentescoDep().click().type('Pai/Mãe',{ delay: 0}).type('{enter}').should('be.visible')
    }
    dependencia(){      
        this.elements.dependencia().click().type('Normal',{ delay: 0}).type('{enter}').should('be.visible')
    }
    adcEsair(){      
        this.elements.adcEsair().click().should('be.visible')
    }
    // rollBar(){      
    //     this.elements.rollBar().click().scrollTo('right', { easing: 'linear' }, { duration: 2000 }).should('be.visible')
    // }
   


}

export default new sigFolha();