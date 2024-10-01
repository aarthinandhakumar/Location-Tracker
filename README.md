# Location Tracker Application

This HTML5 application simulates the path of a bird released from a cage using the Geolocation API. The app tracks the bird’s location and updates it periodically, displaying the path on a Google Map.

## Features

- **Geolocation Tracking**: Uses the HTML5 Geolocation API to get the current position and simulate the bird's movement.
- **Simulated Movement**: The bird's latitude and longitude are updated every 5 seconds, with the movement restricted to the NorthWest direction.
- **Google Map Integration**: Displays the bird's initial location and updates the path on a Google Map.
- **Automatic Updates**: The location is updated every 5 seconds using `setInterval` after starting.

## How to Use

1. Open `LocationTracker.html` in a web browser.
2. The app will display placeholders for the initial location and the Google Map.
3. Click the **Start** button to begin tracking the bird's path:
   - The current location will be obtained and displayed on the map.
   - The bird's location will update every 5 seconds with simulated movement.
4. The **Start** button will be disabled after being clicked, and the bird's location will continue to update automatically.
   
## File Structure

- **LocationTracker.html**: The main HTML file containing placeholders for location details and the Google Map.
- **LocationTracker.js**: The JavaScript file that handles the geolocation functionality, simulates movement, and updates the map.

## Installation

1. Download or clone the project to your local machine.
2. Open `LocationTracker.html` in a modern web browser (Google Chrome, Firefox, etc.).
3. Ensure you are connected to the internet for Google Maps to load.
4. No additional dependencies are required.

## Example Output

Once the application is launched:
- The current location of the bird is displayed on the map.
- The bird will "fly" in the NorthWest direction, with its location updated every 5 seconds.
- The path of the bird will be drawn on the map, simulating the bird's movement.

## License

This project is licensed under the MIT License - see the [LICENSE](License.txt) file for details.
