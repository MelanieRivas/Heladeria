function heladeria() {
	dato=prompt("Cuanto dinero tienes?");
	
	if (dato>=600 && dato<1000){
     alert("Comprate el palito de helado de agua");
     alert("Y tu vuelto es " + (dato-600))
	}

    else if (dato>=1000 && dato<1600){
     alert("Comprate el palito de helado de crema");
     alert("Y tu vuelto es " + (dato-1000))	
    }

    else if (dato>=1600 && dato<1700){
     alert("Comprate el Helado marca Heladix");
     alert("Y tu vuelto es " + (dato-1600))	
    }

    else if (dato>=1700 && dato<1800){
     alert("Comprate el Helado marca Heladovich");	
     alert("Y tu vuelto es " + (dato-1700))
    }

    else if (dato>=1800 && dato<2900){
     alert("Comprate el helado marca Helardo");
     alert("Y tu vuelto es " + (dato-1800))	
    }

    else if (dato>=2900){
     alert("Comprate el helado con confites o el pote de 1/4Kg");
     alert("Y tu vuelto es " + (dato-2900))	
    }

    else {
    	alert("Lo siento, no te alcanza para nada")
    }
}

heladeria()
