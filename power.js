<script>
        function calculateProjection() {
            // Get values from the input fields
            let currentDemand = parseFloat(document.getElementById("current-demand").value);
            let growthRate = parseFloat(document.getElementById("growth-rate").value);
            let years = parseFloat(document.getElementById("years").value);

            // Check if inputs are valid
            if (isNaN(currentDemand) || isNaN(growthRate) || isNaN(years)) {
                document.getElementById("result").innerHTML = "Please enter valid numbers in all fields.";
                return;
            }

            // Basic formula for electricity demand projection using compound interest formula
            let futureDemand = currentDemand * Math.pow((1 + (growthRate / 100)), years);

            // Display result
            document.getElementById("result").innerHTML = 
                `Projected Peak Electricity Demand in ${years} years: ${futureDemand.toFixed(2)} MW`;
        }
    </script>