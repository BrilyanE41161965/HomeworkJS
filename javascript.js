class Konversi {
  Celcius(option2, input1) {
    if (option2 == "1") {
      
      return input1;
    }
    if (option2 == "2") {
    
      return (4 / 5) * input1;
    }
    if (option2 == "3") {
      return (9 / 5) * input1 + 32;
    }
  }

  Fahrenheit(option2, input1) {
    if (option2 == "1") {
      return (5 / 9) * (input1 - 32);
    }
    if (option2 == "2") {
      return input1;
    }
    if (option2 == "3") {
      return (4 / 9) * (input1 - 32);
    }
  }

  Reamur(option2, input1) {
    if (option2 == "1") {
      return (5 / 4) * input1;
    }
    if (option2 == "2") {
      return (9 / 4) * input1 + 32;
    }
    if (option2 == "3") {
      return input1;
    }
  }
}

const kon = new Konversi();
function convert() {
  if (document.getElementById("option1").value == "1") {
    const hasil = kon.Celcius(
      document.getElementById("option2").value,
      parseInt(document.getElementById("input1").value)
    );
    document.getElementById("hasil").value = hasil;

  }
  if (document.getElementById("option1").value == "2") {
    const hasil = kon.Fahrenheit(
      document.getElementById("option2").value,
      parseInt(document.getElementById("input1").value)
    );
    document.getElementById("hasil").value = hasil;
  }
  if (document.getElementById("option1").value == "3") {
    const hasil = kon.Reamur(
      document.getElementById("option2").value,
      parseInt(document.getElementById("input1").value)
    );
    document.getElementById("hasil").value = hasil;
  }
}

function reset() {
  document.getElementById("input1").value = "";
  document.getElementById("hasil").value = "";
}

function gantiWarna() {
  document.body.style.backgroundColor = document.getElementById("warna").value;
}
