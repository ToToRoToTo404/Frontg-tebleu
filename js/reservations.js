console.log('🔍 Fichier reservations.js chargé');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 DOM chargé');
    
    // Vérifier Flatpickr
    if (typeof flatpickr === 'undefined') {
        console.error('❌ Flatpickr n\'est pas chargé');
        console.log('Scripts chargés:', document.scripts);
        return;
    }
    console.log('✅ Flatpickr est chargé');
    
    // Vérifier l'élément input
    const input = document.getElementById('dates');
    if (!input) {
        console.error('❌ Element #dates non trouvé');
        console.log('DOM actuel:', document.body.innerHTML);
        return;
    }
    console.log('✅ Element #dates trouvé');
    
    // Vérifier le conteneur
    const container = document.getElementById('calendar-container');
    if (!container) {
        console.error('❌ Element #calendar-container non trouvé');
        return;
    }
    console.log('✅ Element #calendar-container trouvé');
    
    // Initialiser Flatpickr
    try {
        const calendar = flatpickr("#dates", {
            mode: "range",
            minDate: "today",
            locale: "fr",
            dateFormat: "d/m/Y",
            inline: true,
            showMonths: 2
        });
        console.log('✅ Calendrier initialisé');
        console.log('Configuration:', calendar.config);
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation:', error);
        console.log('Stack trace:', error.stack);
    }

    // Gestion du formulaire
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dates = document.getElementById('dates').value;
        const guests = document.getElementById('guests').value;

        // Validation
        if (!dates || !guests) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Ici, ajoutez votre logique pour vérifier la disponibilité
        console.log('Demande de réservation :', {
            dates: dates,
            nombrePersonnes: guests
        });
    });

    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    
    // Définir la date minimale à aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    startDate.min = today;
    
    // Mettre à jour la date minimale de départ en fonction de la date d'arrivée
    startDate.addEventListener('change', function() {
        endDate.min = startDate.value;
        if (endDate.value && endDate.value < startDate.value) {
            endDate.value = startDate.value;
        }
    });
    
    // Validation du formulaire
    document.getElementById('reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Dates sélectionnées:', {
            arrivee: startDate.value,
            depart: endDate.value
        });
    });
});