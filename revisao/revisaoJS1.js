function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let porcentagem = 5/100 * valorTotalVendas
    let salario = 2000 + (qtdeCarrosVendidos * 100) + porcentagem
    
    return salario
  }
  