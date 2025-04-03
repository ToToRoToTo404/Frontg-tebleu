console.log('🔍 Fichier reservations.js chargé');

document.addEventListener('DOMContentLoaded', function () {
    console.log('🔍 DOM chargé');

    // Vérifiez si jQuery est chargé
    if (typeof $ === 'undefined') {
        console.error('❌ jQuery n\'est pas chargé');
        return;
    }
    console.log('✅ jQuery est chargé');

    // Initialisation de Bootstrap Datepicker
    $('#start-date').datepicker({
        format: 'dd/mm/yyyy', // Format de la date
        startDate: 'today', // Empêche la sélection de dates passées
        language: 'fr', // Localisation française
        autoclose: true // Ferme automatiquement le calendrier après sélection
    }).on('changeDate', function (e) {
        // Met à jour la date minimale pour le champ de départ
        $('#end-date').datepicker('setStartDate', e.date);
    });

    $('#end-date').datepicker({
        format: 'dd/mm/yyyy',
        startDate: 'today',
        language: 'fr',
        autoclose: true
    });

    // Gestion du formulaire
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const guests = document.getElementById('guests').value;

        // Validation
        if (!startDate || !endDate || !guests) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Logique de réservation
        console.log('Demande de réservation :', {
            arrivee: startDate,
            depart: endDate,
            nombrePersonnes: guests
        });
    });
});