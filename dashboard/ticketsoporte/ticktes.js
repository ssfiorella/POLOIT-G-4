const sidebar = document.getElementById('sidebar');

function openSidebar() {
    sidebar.classList.add('sidebar-responsive');
}

function closeSidebar() {
    sidebar.classList.remove('sidebar-responsive');
}

// Simulación BBDD de tickets
const ticketsData = [
    { id: '001', email: 'fundacion.empujar@gmail.com', asunto: 'Problema con contraseña', descripcion: 'No podemos acceder a la cuenta. La contraseña no funciona y no recibimos el correo de recuperación. URGENTE!', estado: 'open', fecha: '19/09/2025' },
    { id: '002', email: 'polo_it@gmail.com', asunto: 'Sospecha de phishing', descripcion: 'Hemos recibido un correo sospechoso que parece ser de su organización. Quisiéramos verificar si es legítimo.', estado: 'resolved', fecha: '15/09/2025' },
    { id: '003', email: 'alpine@gmail.com', asunto: 'Problemas de conexión', descripcion: 'No tenemos internet y necesitamos resolverlo para seguir trabajando.', estado: 'open', fecha: '09/09/2025' },
    { id: '004', email: 'williams@gmail.com', asunto: 'Computadora muy lenta', descripcion: 'La PC tarda demasiado en iniciar y aparecen ventanas de publicidad extraña.', estado: 'open', fecha: '03/09/2025' }
];

// Elementos del HTML
const tableBody = document.querySelector('.tickets-table-container tbody');
const filterSelect = document.querySelector('.filter-dropdown select');
const searchInput = document.querySelector('.search-bar input');

// Modal
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.appendChild(modalContent);

function renderTickets(tickets) {
    tableBody.innerHTML = ''; 
    if (tickets.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No se encontraron tickets.</td></tr>';
        return;
    }
    // Tickets ordenados por fecha, del más reciente..
    tickets.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    tickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${ticket.id}</td>
            <td>${ticket.email}</td>
            <td>${ticket.asunto}</td>
            <td><span class="status ${ticket.estado}">${ticket.estado === 'open' ? 'Abierto' : 'Resuelto'}</span></td>
            <td>${ticket.fecha}</td>
            <td><button class="view-btn" data-id="${ticket.id}">Ver</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Muestra la ventana modal con los datos de un ticket
function openModal(ticket) {
    modalContent.innerHTML = `
        <span class="close-btn">&times;</span>
        <h3>Ticket #${ticket.id} - Estado: ${ticket.estado === 'open' ? 'Abierto' : 'Resuelto'}</h3>
        <p><strong>Email:</strong> ${ticket.email}</p>
        <p><strong>Descripción:</strong> ${ticket.descripcion}</p>
        <div class="modal-actions">
            <button class="resolve-btn" data-id="${ticket.id}">Marcar como resuelto</button>
        </div>
    `;
    modal.classList.add('show');
}

// Cuando el usuario haga clic en un botón "Ver" de la tabla modal
tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-btn')) {
        const ticketId = e.target.dataset.id;
        const ticket = ticketsData.find(t => t.id === ticketId);
        if (ticket) {
            openModal(ticket);
        }
    }
});

// Cuando el usuario haga clic en la "X", se cierra
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target === modal) {
        modal.classList.remove('show');
    }
});

// Cuando el usuario haga clic en "Marcar como resuelto", se actualiza el ticket y cierra el modal
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('resolve-btn')) {
        const ticketId = e.target.dataset.id;
        const ticket = ticketsData.find(t => t.id === ticketId);
        if (ticket) {
            ticket.estado = 'resolved';
            renderTickets(ticketsData); 
            modal.classList.remove('show');
        }
    }
});

// Filtrar tabla por estado
filterSelect.addEventListener('change', (e) => {
    const status = e.target.value;
    if (status === 'all') {
        renderTickets(ticketsData);
    } else {
        const filteredTickets = ticketsData.filter(ticket => ticket.estado === status);
        renderTickets(filteredTickets);
    }
});

// Buscar tickets en tiempo real
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredTickets = ticketsData.filter(ticket =>
        ticket.email.toLowerCase().includes(searchText) ||
        ticket.asunto.toLowerCase().includes(searchText)
    );
    renderTickets(filteredTickets);
});

// Renderizar la tabla al cargar la página por primera vez
renderTickets(ticketsData);