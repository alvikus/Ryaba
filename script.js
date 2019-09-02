// const render = data => {
//    const card =
// 		<div class="person">
// 			name: <div class="person_name">${data.name}</div>
// 			birth year: <div class="person_birth-year">${data.birth_year}</div>
// 			gender: <div class="person_gender">${data.person_gender}</div>
// 			mass: <div class="person_mass">${data.mass}</div>
// 		</div>

// const $card = $(card);

// $card.appendTo(document.body);
// }

const dataURL = "https://api.myjson.com/bins/jcmhn/";

function handleButton() {
	$.getJSON(dataURL, handleData); 
}
     
  
function handleData(data) {
	let finalText = "";

    let var1 = $("input[name = var1]")[0].value;
    let var2 = $("input[name = var2]")[0].value;
    let var3 = $("input[name = var3]")[0].value;
    let var4 = $("input[name = var4]")[0].value;
    let var5 = $("input[name = var5]")[0].value;
    let var6 = $("input[name = var6]")[0].value;
    let speach = $("input[name = speach]")[0].value;


	data ["text"].forEach(function(item, index){

			item = item.replace("{var1}", var1);
			item = item.replace("{var2}", var2);
			item = item.replace("{var3}", var3);
			item = item.replace("{var4}", var4);
			item = item.replace("{var5}", var5);
			item = item.replace("{var6}", var6);
			item = item.replace("{speach}", speach);

		finalText = finalText + item + "<Br>";})
	


$("div#result").html(finalText);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);