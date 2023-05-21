var eventsData = [
    {
      id: 1,
      title: "Clube Chalezinho",
      date: "20 de Maio",
      location: "Av. Professor Mário Werneck, Buritis, Belo Horizonte",
      description: "Descrição do evento .",
      image: "img/clube-chelezinho-belo-horiz.jpg"
    },
    {
      id: 2,
      title: "Mixed by Mixed",
      date: "25 de Maio",
      location: "Av. Montreal, Jardim Canadá Nova Lima",
      description: "Descrição do evento .",
      image: "img/mixed.jpeg.jpeg"
    },
    {
      id: 3,
      title: "Prime Rock Brasil Bh",
      date: "05 de Junho",
      location: "Esplanada Mineirão, Pampulha, Belo Horizonte",
      description: "Descrição do evento .",
      image:"img/i76gby6k.png"
    },
  {
      id: 4,
      title: "Festival Sertanejo",
      date: "20 de Junho",
      location: "Esplanada Mineirão, Pampulha, Belo Horizonte",
      description: "Descrição do evento .",
    image:"img/sertanejo.jpg"
    },
  
  ];
  
  // Função de aparecer os eventos
  function loadEvents() {
    var eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = ''; 
    
    eventsData.forEach(function(event) {
      
      var eventDiv = document.createElement("div");
      eventDiv.classList.add("event");
  
      var title = document.createElement("h2");
      title.textContent = event.title;
  
      var date = document.createElement("p");
      date.textContent = "Data: " + event.date;
  
      var location = document.createElement("p");
      location.textContent = "Local: " + event.location;
  
      var description = document.createElement("p");
      description.textContent = "Descrição: " + event.description;
  
      var image = document.createElement("img");
      image.src = event.image;
      image.alt = event.title;
      image.classList.add("event-image");
  
      var details = document.createElement("div");
      details.classList.add("event-details");
  
      var showDetailsButton = document.createElement("button");
      showDetailsButton.textContent = "Mais informações";
      showDetailsButton.classList.add("show-details-button");
  
      showDetailsButton.addEventListener("click", function() {
        details.classList.toggle("visible");
        showDetailsButton.textContent = details.classList.contains("visible") ? "Mais informações" :"Mais informações";
      });
      
      details.appendChild(description);
      
      eventDiv.appendChild(image);
      eventDiv.appendChild(title);
      eventDiv.appendChild(date);
      eventDiv.appendChild(location);
      eventDiv.appendChild(description);
      eventDiv.appendChild(showDetailsButton);
      eventDiv.appendChild(details);
  
      eventDiv.addEventListener("click", function() {
        viewEventDetails(event);
      });
  
      eventContainer.appendChild(eventDiv);
    });
  }
  
  // Função de exibir detalhes 
  function viewEventDetails(event) {
    
    // Salva evento clicado no Local Storage
    localStorage.setItem("selectedEvent", JSON.stringify(event));
  
    // Redireciona para a página de detalhes 
    window.location.href = "mockfake/event" + event.id + ".html";
  }
  
  // Carrega os eventos ao carregar a página
  document.addEventListener("DOMContentLoaded", loadEvents);
  
  
  