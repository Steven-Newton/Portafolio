function quote(hours,rate,vat,extras,percent,fixed){
    percent /= 100;
    result = rate*hours*(percent+1)+fixed;
    let i=0;
    do {
      if(extras.options[i].selected){
        result += parseFloat(extras.options[i].value);
      }
      i++;
    }while (i<extras.options.length);
      if(vat){
         result *= 1.16;
      } 
        return result;
  }

  let btn = document.getElementById("quoteButton");
  btn.addEventListener ("click", function (e){
      e.preventDefault ();
      console.log("btn click");
      let hours = parseFloat (document.getElementById("inputHours").value);
      let rate = parseFloat (document.getElementById("inputRate").value);
      let vat = document.getElementById("checkVAT").checked;
      let extras = document.getElementById("inputExtras")
      let change = parseFloat (document.getElementById("inputChange").value);
      let fixed = parseFloat (document.getElementById("inputFixed").value);
      let mail = document.getElementById("inputMail").value;
      let name = document.getElementById("inputName").value;
    /*Checamos inputs aceptables*/ 
      flag = true;
      if (isNaN(hours)) {
      console.log("hours not a number");
      document.getElementById("inputHours").style.borderColor = "#FF0000";
      flag = false;
      }
      else{
      document.getElementById("inputHours").value = hours;
      document.getElementById("inputHours").style.borderColor = "#ced4da";
      }
      if (isNaN(rate)){
      console.log("rate not a number");
      document.getElementById("inputRate").style.borderColor = "#FF0000";
      flag = false;  }
      else{ document.getElementById("inputRate").value = rate;
      document.getElementById("inputRate").style.borderColor = "#ced4da";    }
      if (isNaN(change)){
      console.log("Change not a number");
      document.getElementById("inputChange").style.borderColor = "#FF0000";
      flag = false;}
      else{
        document.getElementById("inputChange").value = change;
        document.getElementById("inputChange").style.borderColor = "#ced4da"; }
      if (isNaN(fixed)){
      console.log("Fixed not a number");
      document.getElementById("inputFixed").style.borderColor = "#FF0000";
      flag = false;
      }
      else{document.getElementById("inputFixed").value = fixed;
        document.getElementById("inputFixed").style.borderColor = "#ced4da"; }
      if (flag) {
      
        let extrastotal = ' <ul class="list-group">';
         for(let i = 0; i<extras.options.length;i++)
        {
          if(extras.options[i].selected){
            extrastotal += `<li class="list-group-item "> ${extras.options[i].text} : ${extras.options[i].value}$;`
          }
        }
        extrastotal += `</ul>`
        let total = quote(hours,rate,vat,extras,change,fixed);
        document.getElementById("costText").innerHTML =  ` <ul class="list-group">  <li class="list-group-item ">  email: ${mail}    <li class="list-group-item ">  name: ${name}  <li class="list-group-item ">   hours: ${hours} <li class="list-group-item ">  hourly rate :${rate}$ <li class="list-group-item ">  vat: ${vat} 
        <li class="list-group-item ">  extras: ${extrastotal} <li class="list-group-item ">  change management  ${change}%  <li class="list-group-item ">  fixed costs: ${fixed} <li class="list-group-item active">  total:  ${total.toFixed(2)}$ </ul>` ;
      }
  });
  
  let btn2 = document.getElementById("printButton");
  btn2.addEventListener ("click", function (e){
    e.preventDefault ();
    window.print();
    console.log("print");
  })