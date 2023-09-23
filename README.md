<h1 align="center" id="title">My Laundry Backend</h1>

<p id="description">My Laundry Backend source code written in NodeJS</p>

  
  

Here're some of the project's best features:

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repo</p>

```
git clone https://github.com/Vignesh-Git/my-laundry-backend.git
```

<p>2. Change directory</p>

```
cd my-laundry-backend
```

<p>3. Install dependencies</p>

```
npm i
```

<p>4. Make sure to install mongoDB in local machine</p>

<p>5. Modify the connection string from .env if required</p>

<p>6. start the project</p>

```
npm start
```
<h2>💻 Usage:</h2>

<p>1. Signup ( /api/user/signup )</p>

```
firstName : string; lastName : string; email : string ; mobileNumberExtension : string; mobileNumber : string;
```

<p>1.1. signup sample</p>

```
firstName : "Kevin"; lastName : "Peter"; email : "kevinpeter@gmail.com"; mobileNumberExtension : "+91"; mobileNumber : "9876543210";
```

<p>2. Trigger OTP ( /api/user/trigger_otp )</p>

```
mobileNumberExtension : string; mobileNumber : string;
```

<p>3. Verify OTP ( /api/user/verify_otp )</p>

```
mobileNumberExtension : string; mobileNumber : string; otp : string;
```

