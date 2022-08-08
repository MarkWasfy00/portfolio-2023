<!DOCTYPE html>
<html>
<head>
    <title>Email From {{ $mailData['email'] }}</title>
</head>
<body>
    <h1>Name : {{ $mailData['name'] }}</h1>
    <h3>{{ $mailData['message'] }}</h3>
    <p>Thank you</p>
</body>
</html>