function calcular2(){
    var num3 = document.getElementById("num3");
    var label = document.getElementById("resultado2");
    var listaSuspensa = document.getElementById("unidades");
	var listaSuspensaSaida = document.getElementById("unidadesSaida");
    var unidade = listaSuspensa.value;
	var unidadeSaida = listaSuspensaSaida.value;
    var resultado = 0;
	var entradaValor = parseFloat(num3.value);
	if (unidade == "ha" && unidadeSaida == "ha"){
		resultado = entradaValor;
	}
	else
		if (unidade == "ha" && unidadeSaida == "alqueire"){
			resultado = entradaValor/2.4;
		}
		else
			if (unidade == "ha" && unidadeSaida == "m2"){
				resultado = entradaValor*10000;
			}
			else
				if (unidade == "alqueire" && unidadeSaida == "ha"){
					resultado = entradaValor*2.4;
				}
				else
					if (unidade == "alqueire" && unidadeSaida == "alqueire"){
						resultado = entradaValor;
					}
					else
						if (unidade == "alqueire" && unidadeSaida == "m2"){
							resultado = entradaValor*24200;
						}
						else
							if (unidade == "m2" && unidadeSaida == "ha"){
								resultado = entradaValor/10000;
							}
							else
								if (unidade == "m2" && unidadeSaida == "alqueire"){
									resultado = entradaValor/24200;
								}
								else
									if (unidade == "m2" && unidadeSaida == "m2"){
										resultado = entradaValor;
									}
									else{}
    console.log("unidade: " + unidade);
	console.log("unidadeSaida: " + unidadeSaida);
    label.textContent = "Resultado: " + resultado;
}
