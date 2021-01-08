class CaloriesTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if (this.currentCalories > this.maxCalories) {
            this.logCalorieSurplus()
        }
    }

    logCalorieSurplus() {
        console.log('Max calories exceeded');
    }
}

const caloriesTracker = new CaloriesTracker(5000)
caloriesTracker.trackCalories(500)
caloriesTracker.trackCalories(100)
caloriesTracker.trackCalories(700)
caloriesTracker.trackCalories(1200)
