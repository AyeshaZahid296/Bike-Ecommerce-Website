
// for discription part
 function showDescription() {
            // Show Description content
            document.getElementById('description').classList.add('active');
            document.getElementById('specs').classList.remove('active');
            
            // Highlight the active tab
            document.querySelector('.tab-button:nth-child(1)').classList.add('active');
            document.querySelector('.tab-button:nth-child(2)').classList.remove('active');
        }

        function showSpecs() {
            // Show Specs content
            document.getElementById('specs').classList.add('active');
            document.getElementById('description').classList.remove('active');

            // Highlight the active tab
            document.querySelector('.tab-button:nth-child(2)').classList.add('active');
            document.querySelector('.tab-button:nth-child(1)').classList.remove('active');
        }