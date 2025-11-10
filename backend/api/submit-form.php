<?php

// 1. Handle CORS - Allow React app to communicate
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// 3. Database configuration
$host = 'localhost';
$dbname = 'personal_db';
$username = 'root';    // Default XAMPP username
$password = '';        // Default XAMPP password (usually empty)

try {
    // 4. Create database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 5. Get the raw JSON data from React
    $json_data = file_get_contents('php://input'); 
    $data = json_decode($json_data, true); // Convert JSON to PHP array

    // 6. Validate that we have data
    if (!$data) {
        echo json_encode(['success' => false, 'error' => 'No data received']);
        exit;
    }

    // 7. Extract form data (FIXED the surname bug)
    $name = $data['name'];
    $surname = $data['surname'];  // Fixed from 'name' to 'surname'
    $age = $data['age'];
    $profession = $data['profession'];
    $email = $data['email'];

    // 8. Prepare SQL insert statement
    $sql = "INSERT INTO users (name, surname, age, profession, email) 
            VALUES (:name, :surname, :age, :profession, :email)";
    
    $stmt = $pdo->prepare($sql);
    
    // 9. Execute the query with the form data
    $stmt->execute([
        ':name' => $name,
        ':surname' => $surname,
        ':age' => $age,
        ':profession' => $profession,
        ':email' => $email
    ]);

    // 10. Send success response back to React
    echo json_encode([
        'success' => true,
        'message' => 'User data saved successfully!',
        'inserted_id' => $pdo->lastInsertId() // Returns the auto-increment ID
    ]);

} catch (PDOException $e) {
    // 11. Handle database errors
    echo json_encode([
        'success' => false,
        'error' => 'Database error: ' . $e->getMessage()
    ]);
} catch (Exception $e) {
    // 12. Handle other errors
    echo json_encode([
        'success' => false,
        'error' => 'Error: ' . $e->getMessage()
    ]);
}
?>