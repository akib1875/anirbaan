<?php
require('fpdf.php');

// Get input data from the POST request
$inputData = json_decode(file_get_contents('php://input'), true);

$name = $inputData['name'];
$country = $inputData['country'];

// Create a PDF certificate
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(40, 10, 'Certificate of Achievement', 0, 1, 'C');
$pdf->Ln(10);
$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(0, 10, "This is to certify that\n\n$name\n\nhas successfully completed a course from\n\n$country.");

// Save the PDF to a file
$certificateFilename = "certificate.pdf";
$pdf->Output($certificateFilename, 'F');

// Respond with the URL to the generated certificate
$response = [
    'certificateUrl' => $certificateFilename,
];
header('Content-Type: application/json');
echo json_encode($response);
?>
