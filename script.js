function generateList() {
  console.log("Button clicked!")
  
  
  if (document.getElementById("winterCheckbox").checked == true) {
    console.log("Winter is checked.")
      var mydata = JSON.parse("media.json");
      alert(mydata[0].name);
      alert(mydata[0].age);
      alert(mydata[1].name);
      alert(mydata[1].age);
  }
}
