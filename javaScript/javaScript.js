
		
		function porezka(){
		
			var diametrtruby = document.getElementById("diametrtruby").value;
			var tolschinastenki = document.getElementById("tolschinastenki").value;
			var kolichestvotrub = document.getElementById("kolichestvotrub").value;
			if(kolichestvotrub == 0) {
			     kolichestvotrub = 1;
             }
			var radiusTruby = diametrtruby / 2;
			var naruzhPlTrub = radiusTruby * radiusTruby * 3.14;
			var vnutrDiametr = diametrtruby - tolschinastenki * 2;
			var vnutrRadius = vnutrDiametr / 2;
			var vnutrPlTrub = vnutrRadius * vnutrRadius * 3.14;
			var ploscaReza = (naruzhPlTrub - vnutrPlTrub) / 100 * kolichestvotrub;
			var vremaporezky = ploscaReza / 9;
			var vremaporezkychasov = vremaporezky / 60;
			var vremaporezkyminut = vremaporezky - (Math.floor(vremaporezkychasov) * 60);
			var rashodkrugov = ploscaReza / 160;
			
		    if(isNaN(diametrtruby) || isNaN(tolschinastenki) || isNaN(kolichestvotrub)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(diametrtruby == 0 || tolschinastenki == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			else {
			if(tolschinastenki < diametrtruby / 2) {
			    if(tolschinastenki > 140) {
				    document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscaReza)+" см2<br/>"
					+"К сожалению нет возможности порезать такие трубы болгаркой";
				}
			     else {
			  if(vremaporezkychasov >= 1) {
			document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscaReza)+" см2<br/>" 
				   +"Длительность порезки болгаркой = "+Math.floor(vremaporezkychasov)+" час "+ Math.floor(vremaporezkyminut)+" мин<br/>"
				   +"Расход обр. кругов = "+rashodkrugov.toFixed(1)+"шт"; }
				 else {
			document.getElementById("porezatmp3").play();	 
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscaReza)+" см2<br/>" 
				   +"Длительность порезки болгаркой = "+Math.round(vremaporezky)+" мин<br/>"
				   +"Расход обр. кругов = "+rashodkrugov.toFixed(1)+" шт";
                   }
				   }
				   }
				   
			else 
            document.getElementById("monitorRezult").innerHTML="Пожалуйста проверьте <br/>правильность заполнения!";			
			   
		
		}
		}
		function vzveshivanie() {
		    
		    var diametrtruby = document.getElementById("diametrtruby").value;
			var tolschinastenki = document.getElementById("tolschinastenki").value;
			var kolichestvotrub = document.getElementById("kolichestvotrub").value;
			var dlinatruby = document.getElementById("dlinatruby").value;
			if(kolichestvotrub == 0) {
			     kolichestvotrub = 1;
             }
			var radiustruby = diametrtruby / 2;
			var naruzhPlTrub = radiustruby * radiustruby * 3.14;
			var vnutrDiametr = diametrtruby - tolschinastenki * 2;
			var vnutrRadius = vnutrDiametr / 2;
			var vnutrPlTrub = vnutrRadius * vnutrRadius * 3.14;
			var ploscaReza = (naruzhPlTrub - vnutrPlTrub) / 100 * kolichestvotrub;
            var vestruby = 	dlinatruby * ploscaReza * 0.00079;
			 if(isNaN(diametrtruby) || isNaN(tolschinastenki) || isNaN(dlinatruby) || isNaN(kolichestvotrub)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(diametrtruby == 0 || tolschinastenki == 0 || dlinatruby == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			 else {
			 if(tolschinastenki < diametrtruby / 2) {
             document.getElementById("vzvesitmp3").play();
			 document.getElementById("monitorRezult").innerHTML="Вес трубы = "+vestruby.toFixed(2)+" кг";			
             }	
              else {
             document.getElementById("monitorRezult").innerHTML="Неправильно заполнены поля! <br/ Проверьте правильность заполнения>";	
                   }			 
		} }
		
		
		function porezkalistov() {
		
		var shirinalista = document.getElementById("shirinalista").value;
		var tolschinalista = document.getElementById("tolschinalista").value;
		var kolichestvolistov = document.getElementById("kolichestvolistov").value;
		 if(kolichestvolistov == 0) {
			     kolichestvolistov = 1;
             }
		var ploschalistov = shirinalista * tolschinalista / 100 * kolichestvolistov;
		var dlitelnostporezki = ploschalistov / 9;
		 var dlitporBolchas = dlitelnostporezki / 60;
		 var dlitporBolminut = dlitelnostporezki - (Math.floor(dlitporBolchas) * 60);
		var porezkaplazmoy = ploschalistov / 80;
		 var dlitporPlazchas = porezkaplazmoy / 60;
		 var dlitporPlazminut = porezkaplazmoy - (Math.floor(dlitporPlazchas) * 60);
		var rashodkrugov = ploschalistov / 160;
		
		if(isNaN(shirinalista) || isNaN(tolschinalista) || isNaN(kolichestvolistov)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(shirinalista == 0 || tolschinalista == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			else {
		
		if(tolschinalista<46) {
		 if(dlitporBolchas >= 1 && dlitporPlazchas >= 1) {
		   document.getElementById("porezatmp3").play();
		   document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		  +"Длительность порезки болгаркой = "+Math.floor(dlitporBolchas)+" час "+Math.floor(dlitporBolminut)+" мин<br/>"
		  +"Длительность порезки плазмой = "+Math.floor(dlitporPlazchas)+" час "+Math.floor(dlitporPlazminut)+" мин<br/>"
		  +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт";
		 }
		  else if(dlitporBolchas >= 1 && dlitporPlazchas < 1) {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		  +"Длительность порезки болгаркой = "+Math.floor(dlitporBolchas)+" час "+Math.floor(dlitporBolminut)+" мин<br/>"
		  +"Длительность порезки плазмой = "+Math.round(porezkaplazmoy)+" мин<br/>"
		  +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт";
		  }
		 else {
		document.getElementById("porezatmp3").play();
		document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		  +"Длительность порезки болгаркой = "+Math.round(dlitelnostporezki)+" мин<br/>"
		  +"Длительность порезки плазмой = "+Math.round(porezkaplazmoy)+" мин<br/>"
		  +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт";} }
		  
		  
		  else if(tolschinalista>45 && tolschinalista<71) {
		    if(dlitporBolchas >= 1) {
			  document.getElementById("porezatmp3").play();
			  document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		  +"Длительность порезки болгаркой = "+Math.floor(dlitporBolchas)+" час "+Math.floor(dlitporBolminut)+" мин<br/>"
		  +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт";
			}
			else {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		  +"Длительность порезки болгаркой = "+Math.round(dlitelnostporezki)+" мин<br/>"
		  +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт";
		  } }
		  else
		  document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploschalistov)+" см2<br/>"
		        +"К сожалению<br/> у нас не режут <br/>листы такой толщины";
		}
		}
		
		function vzveshivanielistov() {
		
		var shirinalista = document.getElementById("shirinalista").value;
		var tolschinalista = document.getElementById("tolschinalista").value;
		var kolichestvolistov = document.getElementById("kolichestvolistov").value;
		var dlinalista = document.getElementById("dlinalista").value;
		if(kolichestvolistov == 0) {
			     kolichestvolistov = 1;
             }
		var veslista = shirinalista * dlinalista * tolschinalista * 0.0079 / 1000 * kolichestvolistov;
		
		if(isNaN(shirinalista) || isNaN(tolschinalista) || isNaN(kolichestvolistov) || isNaN(dlinalista)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(shirinalista == 0 || tolschinalista == 0 || dlinalista == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			else {
		  document.getElementById("vzvesitmp3").play();
		  document.getElementById("monitorRezult").innerHTML="Вес листа = "+veslista.toFixed(2)+" кг";
		}
		}
		
		
		function porezkakrugov() {
		  
		 var diametrkruga = document.getElementById("diametrkruga").value;
		 var kolichestvokrugov = document.getElementById("kolichestvokrugov").value;
		 if(kolichestvokrugov == 0) {
			     kolichestvokrugov = 1;
             }
		 var radiuskruga = diametrkruga / 2;
		 var ploscharezakruga = radiuskruga * radiuskruga * 3.14 / 100 * kolichestvokrugov;
		 var dlitelnostbolgarka = ploscharezakruga / 9;
		  var dlitporBolchas = dlitelnostbolgarka / 60;
		  var dlitporBolminut = dlitelnostbolgarka - (Math.floor(dlitporBolchas) * 60);
		 var dlitelnostpila = ploscharezakruga / 7;
		  var dlitporPilchas = dlitelnostpila / 60;
		  var dlitporPilminut = dlitelnostpila - (Math.floor(dlitporPilchas) * 60);
		 var dlitelnosttokar = ploscharezakruga / 22;
		   var dlitporTokstchas = dlitelnosttokar / 60;
		   var dlitporTokminut = dlitelnosttokar - (Math.floor(dlitporTokstchas) * 60);
		 var rashodkrugov = ploscharezakruga / 160;
		 var rashodpolotna = ploscharezakruga / 150;
		 
		 if(isNaN(diametrkruga) || isNaN(kolichestvokrugov)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(diametrkruga == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			else {
		 
		 if(diametrkruga < 141) {
		  if(dlitporPilchas >=1 && dlitporBolchas >= 1 && dlitporTokstchas >= 1) {
			document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки болгаркой = "+Math.floor(dlitporBolchas)+" час "+Math.floor(dlitporBolminut)+" мин<br/>"
		 +"Длительность порезки пилой = "+Math.floor(dlitporPilchas)+" час "+Math.floor(dlitporPilminut)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.floor(dlitporTokstchas)+" час "+Math.floor(dlitporTokminut)+" мин<br/>"
		 +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";
		  }
		  else if(dlitporPilchas>=1 && dlitporBolchas >= 1 && dlitporTokstchas < 1) {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки болгаркой = "+Math.floor(dlitporBolchas)+" час "+Math.floor(dlitporBolminut)+" мин<br/>"
		 +"Длительность порезки пилой = "+Math.floor(dlitporPilchas)+" час "+Math.floor(dlitporPilminut)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.round(dlitelnosttokar)+" мин<br/>"
		 +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";
		  }
		  else if(dlitporPilchas>=1 && dlitporBolchas < 1 && dlitporTokstchas < 1) {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки болгаркой = "+Math.round(dlitelnostbolgarka)+" мин<br/>"
		 +"Длительность порезки пилой = "+Math.floor(dlitporPilchas)+"час"+Math.floor(dlitporPilminut)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.round(dlitelnosttokar)+" мин<br/>"
		 +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";
		  }
		  else {
		 document.getElementById("porezatmp3").play();
		 document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки болгаркой = "+Math.round(dlitelnostbolgarka)+" мин<br/>"
		 +"Длительность порезки пилой = "+Math.round(dlitelnostpila)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.round(dlitelnosttokar)+" мин<br/>"
		 +"Расход обр кругов = "+rashodkrugov.toFixed(1)+" шт<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";} }
		 
		 else if(diametrkruga>135 && diametrkruga<525) {
		  if(dlitporPilchas >=1 && dlitporTokstchas >= 1) {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки пилой = "+Math.floor(dlitporPilchas)+" час "+Math.floor(dlitporPilminut)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.floor(dlitporTokstchas)+" час "+Math.floor(dlitporTokminut)+" мин<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";
		  }
		  else if(dlitporPilchas >=1 && dlitporTokstchas < 1) {
		    document.getElementById("porezatmp3").play();
			document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки пилой = "+Math.floor(dlitporPilchas)+" час "+Math.floor(dlitporPilminut)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.round(dlitelnosttokar)+" мин<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";
		  }
		  else {
		 document.getElementById("porezatmp3").play();
		 document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		 +"Длительность порезки пилой = "+Math.round(dlitelnostpila)+" мин<br/>"
		 +"Длительность порезки ток.станком = "+Math.round(dlitelnosttokar)+" мин<br/>"
		 +"Расход ленточного полотна = "+Math.round(rashodpolotna)+" %";} }
		  else
		  document.getElementById("monitorRezult").innerHTML="Площадь порезки = "+Math.round(ploscharezakruga)+" см2<br/>"
		        +"К сожалению <br/>у нас не режут круги<br/> такого большого диаметра";
		} 
		}
		
		function vzveshivaniekrugov() {
		 var diametrkruga = document.getElementById("diametrkruga").value;
		 var kolichestvokrugov = document.getElementById("kolichestvokrugov").value;
		 var dlinakrugov = document.getElementById("dlinakrugov").value;
		 if(kolichestvokrugov == 0) {
			     kolichestvokrugov = 1;
             }
		 var radiuskruga = diametrkruga / 2;
		 var ploscharezakruga = radiuskruga * radiuskruga * 3.14 / 100 * kolichestvokrugov;
		 var veskruga = dlinakrugov * ploscharezakruga * 0.00079;
		 
		 if(isNaN(diametrkruga) || isNaN(kolichestvokrugov) || isNaN(dlinakrugov)) {
				document.getElementById("monitorRezult").innerHTML="Неправильно заполненые поля! <br/>Проверьте правильность заполнения!"; 
			 }
			else if(diametrkruga == 0 || dlinakrugov == 0) {
			    document.getElementById("monitorRezult").innerHTML="Не заполненые поля! <br/>Проверьте правильность заполнения!";
			}
			else {
		  document.getElementById("vzvesitmp3").play();
		  document.getElementById("monitorRezult").innerHTML="Вес круга = "+veskruga.toFixed(2)+" кг";
		}
		}