<?php
header("Content-Type: application/json");
$ideas = [
    ["title" => "Graphic Designer", "description" => "Create visuals for brands.", "skills" => "Design, Photoshop"],
    ["title" => "Content Writer", "description" => "Write blogs and articles.", "skills" => "Writing, SEO"],
];
echo json_encode($ideas[array_rand($ideas)]);
?>
