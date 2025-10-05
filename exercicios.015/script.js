function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados e tente novamente!')
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'img')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'criançaMenino.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'homemJovem.png')
        } else if (idade < 50) {
          //Adulto 
          img.setAttribute('src', 'homemAdulto.png')
        } else {
          //Idoso
          img.setAttribute('src', 'homemIdoso.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'mulherMenina.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'mulherJovem.png')
        } else if (idade < 50) {
          //Adulto 
          img.setAttribute('src', 'mulherAdulta.png')
        } else {
          //Idoso
          img.setAttribute('src', 'mulherIdosa.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
  }
}