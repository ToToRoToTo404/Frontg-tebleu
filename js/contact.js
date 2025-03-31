document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut
        
        // Récupération des valeurs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validation des champs
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        
        // Ici vous pouvez ajouter votre logique d'envoi
        console.log('Formulaire soumis avec succès:', {
            name,
            email,
            message
        });
        
        // Réinitialisation du formulaire
        form.reset();
    });
});